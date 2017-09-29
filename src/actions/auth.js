import { browserHistory } from 'react-router';
import * as actionTypes from '../constants/actionTypes';
import auth from '../utils/auth';

/**
 * Sets the requestSending state, which displays a loading indicator during requests
 * @param  {boolean} sending The new state the app should have
 * @return {object}          Formatted action for the reducer to handle
 */
export function sendingRequest(sending) {
  return { type: actionTypes.SENDING_REQUEST, sending };
}

/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
function anyElementsEmpty(elements) {
  // for (const element in elements) {
  //   if (!elements[element]) {
  //     return true;
  //   }
  // }
  Object.keys(elements).forEach((key) => {
    if (!elements[key]) {
      return true;
    }
    return false;
  });
}

/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
function setAuthState(newState) {
  return { type: actionTypes.SET_AUTH, newState };
}

/**
 * Logs an user out
 */
export function logout() {
  const success = false; /* Simulates we obtain a successfull logg out of an user */
  /* Delete cookie from local storage */
  localStorage.removeItem('token'); /* eslint no-undef: 0*/
  return { type: actionTypes.SET_AUTH, success };
}

/**
 * Logs an user in
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function login(formData) {
  const { formUsername, formPassword } = formData;
  // console.log(formUsername, 'login function called in login action creator');
  return (dispatch) => {
    // Show the loading indicator, hide the last error
    dispatch(sendingRequest(true));
    // If no username or password was specified, throw a field-missing error
    if (anyElementsEmpty({ formUsername, formPassword })) {
      console.log('Field missing found', 'Validation continues signaling failures on Form!');
    }
    // Generate salt for password encryption
    // Encrypt password
    const hash = formPassword; // not implemented yet
    // Use auth.js to fake a request
    auth.login(formUsername, hash, (success, err) => {
      // When the request is finished, hide the loading indicator
      dispatch(sendingRequest(false));
      dispatch(setAuthState(success));
      if (success === true) {
        // If the login worked, forward the user to the dashboard and clear the form
        browserHistory.push('/');
      } else {
        console.log('Error presented in register form: ', err);
      }
    });
  };
}

/**
 * Registers User
 * @param  {string} username The username of the user to be logged in
 * @param  {string} password The password of the user to be logged in
 */
export function register(formData) {
  const { formUsername, formPassword } = formData;
  // console.log(formEmail, 'register function called in register action creator file');
  return (dispatch) => {
    // If no username or password was specified, throw a field-missing error
    if (anyElementsEmpty({ formUsername, formPassword })) {
      console.log('Field missing found', 'Validation continues signaling failures on Form!');
    }
    const success = true; /* Simulates we obtain a successfull loggin of an user */
    dispatch(setAuthState(success));
    if (success === true) {
      // If the login worked, forward the user to the dashboard
      browserHistory.push('/');
    } else {
      console.log('Error presented in login form ');
    }
  };
}
