import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ConnectedLandingPage } from './LandingPage';

// Import styles
import '../styles/app.scss';

const App = () => (
    <Router>
        <div>
            <Route exact path='/' component={ConnectedLandingPage} />
            {/* <Route exact path='/page2' component={Header} /> */}
        </div>
    </Router>
);

export default App;
