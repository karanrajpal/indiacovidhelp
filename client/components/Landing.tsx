import * as React from 'react';
import { Link } from 'react-router-dom';
import { PaymentMaker } from './PaymentMaker';

export const Landing = () => (
    <div className='landing'>
        <div className='landing__content flex four two-600'>
            <div className='landing__description full third-600'>
                <h2>Save your neighborhood by donating to local businesses impacted by COVID-19.</h2>
                <span className='landing__description-subtitle'>
                    In times of crisis, a community must come together. Although, it's challenging to determine which asks for help are truly genuine. That's why we've curated a list of verified local businesses that need help now. Donate to our community fund or find a specific business below.
                </span>
            </div>
            <div className='full third-600 off-fourth-600'>
                <PaymentMaker />
            </div>
        </div>
    </div>
);
