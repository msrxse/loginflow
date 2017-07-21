
import server from './fakeServer';
/**
 * Fake XMLHttpRequest wrapper with a syntax similar to the much used request.js
 * @type {Object}
 */
const fakeRequest = {
  /**
   * Pretends to post to a remote server with fake network latency
   * @param  {string}    endpoint The endpoint of the server that should be contacted
   * @param  {?object}   data     The data that should be transferred to the server
   * @param  {?function} callback Called after the server successfully did it's thing
   */
  post(endpoint, data, callback) {
    // Delay the call by a random amount between 100ms and 2000ms
    // to simulate network latency
    setTimeout(() => {
      switch (endpoint) {
        case '/login':
          server.login(data.username, data.password, callback);
          break;
        case '/register':
          console.log(data, 'post.register called');
          break;
        case '/logout':
          console.log(data, 'post.logout called');
          break;
        default:
          break;
      }
    }, (Math.random() * 2000) + 100);
  },
};

export default fakeRequest;
