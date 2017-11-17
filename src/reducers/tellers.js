import { TELLERS_SET } from '../actions/tellers';

/**
 * [description]
 * @param  {Array}  [state=[]] [description]
 * @param  {[type]} action     [description]
 * @return {[type]}            [description]
 */
export default (state = [], action) => {
  switch (action.type) {
    case TELLERS_SET:
      return action.payload;
    default:
      return state;
  }
};
