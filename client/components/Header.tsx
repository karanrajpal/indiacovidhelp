import * as React from 'react';

import '../styles/header.scss';

export const Header = () => (
    <nav className='header'>
        <a href="#" className="brand">
            {/* <img className="logo" src="/img/basket.png" /> */}
            <span>HelpLocalBiz</span>
        </a>

        <input id="bmenub" type="checkbox" className="show" />
        <label htmlFor="bmenub" className="burger pseudo button">SOS Menu</label>
        <div className="menu">
            <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLScQ-1GTAMEetbch9nyCqxwZ_A1FqqR4YU1gOMh6An-mhlJuWQ/viewform?usp=sf_link"
                className="pseudo button mainButton"
            >
                Add Business
                </a>
            <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeato-ZwK6T2qiIZxHVuqpK0cumj6C0lB_xvP1ZE3koClxuAw/viewform?usp=sf_link"
                className="pseudo button mainButton"
            >
                Nominate
                </a>
        </div>
    </nav>
);
