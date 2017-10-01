import request from './fakeRequest';

/* eslint no-undef: 0*/
const auth = {
  login(username, password, callback) {
    // If there is a token in the localStorage, the user is already authenticated
    if (this.loggedIn()) {
      callback(true);
    }
    // Post a fake request (see below)
    request.post('/login', { username, password }, (response) => {
      // If the user was authenticated successfully, save token to localStorage
      if (response.authenticated) {
        localStorage.token = response.token;
        callback(true);
      } else {
        // If there was a problem authenticating the user, show an error on the form
        //  Nor implemented yet
        // callback(false, response.error);
      }
    });
  },

  /**
   * Checks if anybody is logged in
   * @return {boolean} True if there is a logged in user, false if there isn't
   */
  loggedIn() {
    try {
      return !!localStorage.token;
    } catch (err) {
      return false;
    }
  },
};

export default auth;
