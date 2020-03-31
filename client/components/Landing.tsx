import * as React from 'react';
import { connect } from 'react-redux';
import { setRandomName } from '../state/actions';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { PaymentMaker } from './PaymentMaker';

type ComponentOnePropsType = {
    name: string;
    setRandomName: () => {};
};

const Landing = (props: ComponentOnePropsType) => (
    <div className='landing'>
        <Header />
        <div className="landing__content flex one two-600">
            <div className="left">
                <h1>Save your neighborhood by donating to local businesses impacted by COVID-19.</h1>
                <p>
                    In times of crisis, a community must come together. Although, it's challenging to determine which asks for help are truly genuine. That's why we've curated a list of verified local businesses that need help now. Donate to our community fund or find a specific business below.
                </p>
            </div>
            <div className="right payment-card">
                <h2>IndiaCovidHelp Community Fund</h2>
                <span>Your donation here (100% of it) will be split evenly between three random businesses. After distribution, we'll email you details on who you helped. If you have a special request, please note it!</span>
                <PaymentMaker />
            </div>
        </div>
    </div>
);

export const ConnectedLanding = connect(
    (state) => ({
        name: state.randomName,
    }),
    (dispatch) => ({
        setRandomName: () => {
            const nameList = ['Astro Boy', 'Golden Girl', 'Annoying Frog', 'Peaceful Blob'];
            const randomName = nameList[Math.floor(Math.random() * nameList.length)];
            dispatch(setRandomName({ randomName }));
        },
    })
)(Landing);
