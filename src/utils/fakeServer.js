/**
 * Fake remote server
 * @type {Object}
 */
const server = {
  /**
   * Pretends to log a user in
   *
   * @param {string} username The username of the user to log in
   * @param {string} password The password of the user to register
   * @param {?callback} callback Called after a user is logged in
   */
  login(username, password, callback) {
    // Right now, all calls return auth true!
    if (callback) {
      callback({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      });
    }
  },

};

export default server;
