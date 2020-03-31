/**
 * Redux Actions.
 * Actions can be created as below using the typescript-fsa library (https://www.npmjs.com/package/typescript-fsa)
 */
import actionCreatorFactory from 'typescript-fsa';
 
const actionCreator = actionCreatorFactory();

export const setRandomName = actionCreator<{ randomName: string }>('SET_RANDOM_NAME');
export const setRandomBoolean = actionCreator<{ randomBoolean: boolean }>('SET_RANDOM_BOOLEAN');
