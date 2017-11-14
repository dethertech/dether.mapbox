import DetherJS from 'detherjs';

export const TELLERS_SET = 'TELLERS_SET';

const dether = new DetherJS({
  network: 'kovan',
});

export const set = payload => ({
  type: TELLERS_SET,
  payload,
});

export const getTellers = () => dispatch =>
  new Promise(async (res, rej) => {
    try {
      const allTellers = await dether.getAllTellers();
      dispatch(set(allTellers));
      res();
    } catch (e) {
      rej(e);
    }
  });
