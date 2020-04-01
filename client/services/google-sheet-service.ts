import axios from 'axios';

class GoogleSheetService {
    private url, requestConfig;
    public constructor() {
        const spreadsheetId = '1VS0k-r7-khTpL-vsRLm_1lBvlSX1FaH2XjlRlzBCzCw';
        this.url = `https://spreadsheets.google.com/feeds/cells/${spreadsheetId}/1/public/full?alt=json`;
        // this.requestConfig = {
        //     headers: {
        //         'Authorization': `Bearer ${API_KEY}`,
        //     },
        // };
    }

    public async getAllValues() {
        const response = await axios.get(this.url, this.requestConfig);
        return response;
    }
}

export const googleSheetService = new GoogleSheetService();
