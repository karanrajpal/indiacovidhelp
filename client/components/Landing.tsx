import * as React from 'react';
import { Link } from 'react-router-dom';
import { PaymentMaker } from './PaymentMaker';

export const Landing = () => (
    <div className='landing'>
        <div className='landing__content flex four two-600'>
            <div className='landing__description full third-600'>
                {/* <h2>Save your neighborhood by donating to local businesses impacted by COVID-19.</h2> */}
                <h2>HELP LOCAL BUSINESSES DIRECTLY</h2>
                <span className='landing__description-subtitle'>
                    Unlike salaried employees, your neighbourhood hotels, bookstores, clothing stores and street vendors are in danger. They rely on daily wages to keep their business and family going. Here's your chance to help them, directly.
                    {/* In times of crisis, a community must come together. Although, it's challenging to determine which asks for help are truly genuine. That's why we've curated a list of verified local businesses that need help now. Donate to our community fund or find a specific business below. */}
                </span>
            </div>
            <div className='full third-600 off-fourth-600'>
                <span className='landing__description-subtitle'>
                    <h2>HOW TO HELP?</h2>
                    <ol>
                    <li>Nominate a business in your area by clicking here. Simply add their Google Pay number or bank details and get people to send funds DIRECTLY to their bank account.</li>
                    <li>Donate and spread the word by sharing the link. </li>
                    </ol>
                    THAT'S IT. 
                </span>
                {/* <PaymentMaker /> */}
            </div>
        </div>
    </div>
);
