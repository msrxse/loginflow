import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function userGet(state) {
  return { ...state, isFetching: true, error: null, user: [] };
}
function userGetSuccess(state, action) {
  const { user } = action.user;
  return { ...state, isFetching: false, error: null, ...user };
}

function userGetError(state, action) {
  const { error } = action;
  return { ...state, isFetching: false, error: error.message };
}

export default function fetchData(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_GET:
      return userGet(state);
    case actionTypes.USER_GET_SUCCESS:
      return userGetSuccess(state, action);
    case actionTypes.USER_GET_ERROR:
      return userGetError(state, action);
    default:
      return state;
  }
}
