import { TELLERS_SET } from '../actions/tellers';

/**
 * reducer teller
 */
export default (state = [], action) => {
  switch (action.type) {
    case TELLERS_SET:
      return action.payload;
    default:
      return state;
  }
};
