import axios from 'axios';
import { Business } from '../components/LandingPage';

type GoogleSpreadsheetCell = {
    row: string;
    col: string;
    inputValue: string;
    "$t": string;
};

class GoogleSheetService {
    private url, requestConfig;
    public constructor() {
        const spreadsheetId = '1VS0k-r7-khTpL-vsRLm_1lBvlSX1FaH2XjlRlzBCzCw';
        this.url = `https://spreadsheets.google.com/feeds/cells/${spreadsheetId}/1/public/full?alt=json`;
    }

    public async getAllValues() {
        const response = await axios.get(this.url, this.requestConfig);
        const businesses = this.formatGoogleSheetResponse(response.data);
        return businesses;
    }

    private fieldToColumnNumberMapping: { [name in keyof Business]: number } = {
        timestamp: 0,
        name: 1,
        location: 2,
        ownerName: 3,
        email: 4,
        phoneNumber: 5,
        description: 6,
        links: 7,
        imageUrl: 8,
        verified: 9,
    };

    private formatGoogleSheetResponse(sheetData): Business[] {
        const googleSpreadsheetCells: GoogleSpreadsheetCell[] = sheetData.feed.entry.map((entry) => entry['gs$cell']);
        const headerCells = googleSpreadsheetCells.filter((cell) => cell['row'] === '1');
        // Looping through the entries and building the a double dimension array
        const table = [];
        let columnPointer = 0;
        for (let i = headerCells.length; i < googleSpreadsheetCells.length; i++) {
            const cell = googleSpreadsheetCells[i];
            const currentRowIndex = Number(cell.row) - 2;         // The first row on the spreadsheet starts at 2
            const currentColumnIndex = Number(cell.col);         // The first column on the spreadsheet starts at 1
            columnPointer++;
            if (!table[currentRowIndex]) {
                table[currentRowIndex] = [];
            }
            while (columnPointer < currentColumnIndex) {
                // In this case, there is an empty cell on the spreadsheet that wasn't sent back. We push a blank value instead.
                table[currentRowIndex].push('');
                columnPointer++;
            }
            table[currentRowIndex].push(cell.$t);
            if (columnPointer === headerCells.length) {
                columnPointer = 0;
            }
        }
        console.log(table);
        const businesses: Business[] = table.map((row) => {
            // Fields from the spreadsheet
            const timestamp = row[this.fieldToColumnNumberMapping.timestamp];
            const name = row[this.fieldToColumnNumberMapping.name];
            const location = row[this.fieldToColumnNumberMapping.location];
            const ownerName = row[this.fieldToColumnNumberMapping.ownerName];
            const email = row[this.fieldToColumnNumberMapping.email];
            const phoneNumber = row[this.fieldToColumnNumberMapping.phoneNumber];
            const description = row[this.fieldToColumnNumberMapping.description];
            const links = row[this.fieldToColumnNumberMapping.links];
            const imageUrl = row[this.fieldToColumnNumberMapping.imageUrl];
            const verified = row[this.fieldToColumnNumberMapping.verified];

            // Deriveds fields
            const uniqueId = `${name.toLowerCase().replace(/ /g, '-')}-${location.toLowerCase().replace(/ /g, '-')}`;
            const formattedImageUrl = imageUrl
                ? `https://drive.google.com/uc?export=view&id=${imageUrl.split('id=')[1]}`
                : 'https://i.pinimg.com/originals/f3/9d/63/f39d634a99a22f2960c6cc92f47a6eff.jpg';
            return {
                timestamp,
                name,
                location,
                ownerName,
                email,
                phoneNumber,
                description,
                links,
                imageUrl: formattedImageUrl,
                verified,
                uniqueId,
            };
        });
        return businesses;
    }
}

export const googleSheetService = new GoogleSheetService();
