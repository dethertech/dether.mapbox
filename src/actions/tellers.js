import DetherJS from 'detherjs';

export const TELLERS_SET = 'TELLERS_SET';

/**
 * Instanciate a new DetherJS instance
 * @type {DetherJS}
 */
const dether = new DetherJS({
  network: process.env.REACT_APP_NETWORK,
});

/**
 * Set all tellers
 * @param {[type]} payload [description]
 */
export const set = payload => ({
  type: TELLERS_SET,
  payload,
});

/**
 * Get all teller from dether contract
 * @return {array} all tellers
 */
export const getTellers = () => dispatch =>
  new Promise(async (res, rej) => {
    try {
      const allTellers = await dether.getAllTellers();
      dispatch(set(allTellers));
      res();
    } catch (e) {
      rej(new TypeError(e));
    }
  });
