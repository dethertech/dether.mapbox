import DetherJS from 'detherjs';

export const TELLERS_SET = 'TELLERS_SET';

/**
 * [dether description]
 * @type {DetherJS}
 */
const dether = new DetherJS({
  network: process.env.REACT_APP_NETWORK,
});

/**
 * [set description]
 * @param {[type]} payload [description]
 */
export const set = payload => ({
  type: TELLERS_SET,
  payload,
});

/**
 * [getTellers description]
 * @return {[type]} [description]
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
