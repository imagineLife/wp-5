const reducerTypes = {
  CLICK_BTN: 'CLICK_BTN',
};

function reducer(state, { type, payload }) {
  const reducerObj = {
    CLICK_BTN: () => ({
      clicked: true,
      see: true,
    }),
  };

  if (!reducerObj[`${type}`]) throw new Error('Called header reducer with bad type: ', type);
  return reducerObj[`${type}`]();
}

export {
  reducer,
  reducerTypes
}