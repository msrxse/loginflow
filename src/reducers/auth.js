import * as actionTypes from '../constants/actionTypes';
import auth from '../utils/auth';

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  errorMessage: '',
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
      // break;
    case actionTypes.SENDING_REQUEST:
      return Object.assign({}, state, {
        currentlySending: action.sending,
      });
      // break;
    case actionTypes.SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessage: action.message,
      });
    default:
      return state;
  }
}
