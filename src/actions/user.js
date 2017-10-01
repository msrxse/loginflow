import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

function getUser() {
  return {
    type: actionTypes.USER_GET,
  };
}

function getUserSuccess(user) {
  return {
    type: actionTypes.USER_GET_SUCCESS,
    user,
  };
}

function getUserError(error) {
  return {
    type: actionTypes.USER_GET_ERROR,
    error,
  };
}

/**
 * Called synchronously successful login of user
 * Retreiver currently logged in user
 */
export default function getUserRequest(token) {
  console.log('getUserRequest called with token: ', token);
  return (dispatch, getState) => {
    if (getState().user) {
      return; // No need to fetch
    }
    dispatch(getUser(token));
    /* eslint-disable consistent-return */
    return fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(user => dispatch(getUserSuccess(user)))
      .catch(error => dispatch(getUserError(error)));
  };
}
