import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function setMe(state, action) {
  const { user } = action;
  return Object.assign({}, state, {
    user,
    loggedIn: true,
  });
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ME_SET:
      return setMe(state, action);
    default:
      return state;
  }
}
