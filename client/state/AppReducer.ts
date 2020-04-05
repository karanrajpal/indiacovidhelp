/**
 * Application Redux Reducer.
 * If your application gets bigger, break app out into smaller reducers and use combineReducers here
 */
import {isType} from 'typescript-fsa';
import {
    setSelectedBusinessId,
    setBusinesses,
} from './actions';
import { Action } from 'redux';
import { Business } from '../components/BusinessList';

export type AppReducerType = {
    businesses: Business[];
    selectedBusinessId: string;
};

export const initialState: AppReducerType = {
    businesses: [],
    selectedBusinessId: null,
};

// Define and export reducer
const AppReducer = (state = initialState, action: Action): AppReducerType => {
    if (isType(action, setBusinesses)) {
        return {
            ...state,
            businesses: action.payload.businesses,
        };
    }
    if (isType(action, setSelectedBusinessId)) {
        return {
            ...state,
            selectedBusinessId: action.payload.selectedBusinessId,
        };
    }
    return state;
};

export default AppReducer;
