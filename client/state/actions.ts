/**
 * Redux Actions.
 * Actions can be created as below using the typescript-fsa library (https://www.npmjs.com/package/typescript-fsa)
 */
import actionCreatorFactory from 'typescript-fsa';

import { Business } from '../components/BusinessList';
 
const actionCreator = actionCreatorFactory();

export const setBusinesses = actionCreator<{ businesses: Business[] }>('SET_BUSINESSES');
export const setSelectedBusinessId = actionCreator<{ selectedBusinessId: string }>('SET_SELECTED_BUSINESS_ID');
