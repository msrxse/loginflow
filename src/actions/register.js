import { browserHistory } from 'react-router';
import * as actionTypes from '../constants/actionTypes';

/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
function anyElementsEmpty(elements) {
  for (const element in elements) {
    if (!elements[element]) {
      return true;
    }
  }
  return false;
}

/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
function setAuthState(newState) {
  return { type: actionTypes.SET_AUTH, newState };
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
