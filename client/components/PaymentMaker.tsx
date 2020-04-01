import * as React from 'react';

export const amounts = [500, 2000, 5000, 10000];

type PaymentMakerProps = {
    className: string;
};

export const PaymentMaker = ({ className = '' }: PaymentMakerProps) => (
    <div className={`payment-card ${className}`}>
        <h2>IndiaCovidHelp Community Fund</h2>
        <span className='payment-description'>Your donation here (100% of it) will be split evenly between three random businesses. After distribution, we'll email you details on who you helped. If you have a special request, please note it!</span>
        <div className='flex two payment-options'>
            {amounts.map((amount) => (
                <div key={amount} className='payment-option'>
                    <button>{`₹${amount}`}</button>
                </div>
            ))}
        </div>
        <button className='pay-button success'>Donate</button>
    </div>
);
