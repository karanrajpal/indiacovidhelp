import * as React from 'react';

export const amounts = [500, 2000, 5000, 10000];

export const PaymentMaker = () => (
    <div className='flex two payment-maker'>
        {amounts.map((amount) => (
            <div key={amount} className='payment-option'>
                <button>{`₹${amount}`}</button>
            </div>
        ))}
        <button className='pay-button success center'>Donate</button>
    </div>
);
