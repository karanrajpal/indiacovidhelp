import * as React from 'react';
import { connect } from 'react-redux';
import { setBusinesses } from '../state/actions';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Landing } from './Landing';
import { googleSheetService } from '../services/google-sheet-service';
import { Business, ConnectedBusinessList } from './BusinessList';

type LandingPageProps = {
    businesses: Business[];
    setBusinesses: (businesses: Business[]) => {};
};

class LandingPage extends React.Component<LandingPageProps> {
    constructor (private props: LandingPageProps) {
        super(props);
    }

    async componentDidMount() {
        const businesses = await googleSheetService.getAllValues();
        console.log(businesses);
        this.props.setBusinesses(businesses);
    }

    render() {
        return (
            <div className='landing-page flex one center'>
                <section className='opening'>
                    <Header />
                    <Landing />
                </section>
                <section className='main'>
                    <ConnectedBusinessList />
                </section>
            </div>
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
