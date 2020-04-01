import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { PaymentMaker } from './PaymentMaker';

export const Landing = () => (
    <div className='landing'>
        <Header />
        <div className='landing__content flex one two-600'>
            <div className='left'>
                <h2>Save your neighborhood by donating to local businesses impacted by COVID-19.</h2>
                <span className='project-description'>
                    In times of crisis, a community must come together. Although, it's challenging to determine which asks for help are truly genuine. That's why we've curated a list of verified local businesses that need help now. Donate to our community fund or find a specific business below.
                </span>
            </div>
            <PaymentMaker className='right' />
        </div>
    </div>
);