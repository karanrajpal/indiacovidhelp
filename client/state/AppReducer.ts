/**
 * Application Redux Reducer.
 * If your application gets bigger, break app out into smaller reducers and use combineReducers here
 */
import {isType} from 'typescript-fsa';
import {
    setRandomBoolean,
    setBusinesses,
} from './actions';
import { Action } from 'redux';
import { Business } from '../components/LandingPage';

type AppReducerType = {
    businesses: Business[];
    randomBoolean: boolean;
};

export const initialState: AppReducerType = {
    businesses: [],
    randomBoolean: false,
};

// Define and export reducer
const AppReducer = (state = initialState, action: Action) => {
    if (isType(action, setBusinesses)) {
        return {
            ...state,
            businesses: action.payload.businesses,
        };
    }
    if (isType(action, setRandomBoolean)) {
        return {
            ...state,
            randomBoolean: action.payload.randomBoolean,
        };
    }
    return state;
};

export default AppReducer;
