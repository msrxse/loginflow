import * as actionTypes from '../constants/actionTypes';

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: false,
};

function setAuth(state, action) {
  const { newState } = action;
  return Object.assign({}, state, {
    loggedIn: newState,
  });
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return setAuth(state, action);
    default:
      return state;
  }
}
