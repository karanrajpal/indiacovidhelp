import * as React from 'react';
import { connect } from 'react-redux';
import { setBusinesses } from '../state/actions';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { PaymentMaker } from './PaymentMaker';
import { Landing } from './Landing';
import { googleSheetService } from '../services/google-sheet-service';

export type Business = {
    name: string;
    imageUrl: string;
    descriptin: string;
    location: string;
};

type LandingPageProps = {
    businesses: Business[];
    setBusinesses: (businesses: Business[]) => {};
};

class LandingPage extends React.Component<LandingPageProps> {
    async componentDidMount() {
        const businesses = await googleSheetService.getAllValues();
        console.log(businesses);
    }

    render() {
        return (
            <Landing />
        );
    }
}

export const ConnectedLandingPage = connect(
    (state) => ({
        name: state.randomName,
    }),
    (dispatch) => ({
        setBusinesses: (businesses: Business[]) => {
            dispatch(setBusinesses({ businesses }));
        },
    })
)(LandingPage);
