/* eslint no-undef: 0*/

const auth = {
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
