import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LandingPage } from './LandingPage';

// Import styles
import '../styles/app.scss';
import { ConnectedBusinessDetailPage } from './BusinessDetailPage';
import { googleSheetService } from '../services/google-sheet-service';
import { Business } from './BusinessList';
import { setBusinesses } from '../state/actions';

type AppProps = {
    setBusinesses: (businesses: Business[]) => {};
}

class App extends React.Component<AppProps> {
    constructor (private props: AppProps) {
        super(props);
    }

    async componentDidMount() {
        const businesses = await googleSheetService.getAllValues();
        console.log(businesses);
        this.props.setBusinesses(businesses);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/business/:businessId' component={ConnectedBusinessDetailPage} />
                </div>
            </Router>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
        setBusinesses: (businesses: Business[]) => {
            dispatch(setBusinesses({ businesses }));
        },
    })
)(App);

