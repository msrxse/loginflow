/* eslint no-undef: 0*/

const auth = {
  login(username, password, callback) {
    // If there is a token in the localStorage, the user is already authenticated
    if (this.loggedIn()) {
      callback(true);
    }
    // Post a fake request (not implemented yet)
    callback(true);
    console.log('auth.login called');
  },
  /**
   * Check if user is logged in (in LocalStorage)
   */
  loggedIn() {
    try {
      return !!localStorage.token;
    } catch (err) {
      return false;
    }
  },
};

module.exports = auth;
