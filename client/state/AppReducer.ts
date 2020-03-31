/**
 * Application Redux Reducer.
 * If your application gets bigger, break app out into smaller reducers and use combineReducers here
 */
import {isType} from 'typescript-fsa';
import {
    setRandomBoolean,
    setRandomName,
} from './actions';
import { Action } from 'redux';

export const initialState = {
    randomName: 'Astro Boy',
    randomBoolean: false,
};

// Define and export reducer
const AppReducer = (state = initialState, action: Action) => {
    if (isType(action, setRandomName)) {
        return {
            ...state,
            randomName: action.payload.randomName,
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
