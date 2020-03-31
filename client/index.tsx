/**
 * Entry point to setting app your app.
 * This file includes setting up your redux store with the initial state, and connecting it to the React App.
 */
import App from './components/App';

// Import React and Redux
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Import our initial state for first time load
import AppReducer, { initialState } from './state/AppReducer';

// Configuring Redux Store
const configureStore = () => {
    const store = createStore(AppReducer, initialState);
    return store;
};

const store = configureStore();

render(
    (<Provider store={ store }>
        <App />
    </Provider>),
    document.getElementById('app-container')
);
