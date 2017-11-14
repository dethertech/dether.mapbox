import { combineReducers } from 'redux';

import tellers from './tellers';
/**
 * Reducers
 * @type {Object}
 */
const detherShop = combineReducers({
  tellers,
});

export default detherShop;
