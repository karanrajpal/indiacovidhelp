/**
 * Redux Actions.
 * Actions can be created as below using the typescript-fsa library (https://www.npmjs.com/package/typescript-fsa)
 */
import actionCreatorFactory from 'typescript-fsa';

import { Business } from '../components/LandingPage';
 
const actionCreator = actionCreatorFactory();

export const setBusinesses = actionCreator<{ businesses: Business[] }>('SET_BUSINESSES');
export const setRandomBoolean = actionCreator<{ randomBoolean: boolean }>('SET_RANDOM_BOOLEAN');
