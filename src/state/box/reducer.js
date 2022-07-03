const boxReducerTypes = {
  CLICK_BTN: 'CLICK_BTN',
};

function boxReducer(state, { type, payload }) {
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
  boxReducer,
  boxReducerTypes
}