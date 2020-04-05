import * as React from 'react';
import { Header } from './Header';
import { Landing } from './Landing';
import { ConnectedBusinessList } from './BusinessList';

export const LandingPage = () => (
    <div className='landing-page flex one center'>
        <section className='navigation'>
            <Header />
        </section>
        <section className='opening'>
            <Landing />
        </section>
        <section className='main'>
            <ConnectedBusinessList />
        </section>
    </div>
);
