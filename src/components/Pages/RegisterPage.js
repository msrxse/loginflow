/*
 * RegisterPage
 *
 * Users login on this page
 * Route: /register
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as registerActions from '../../actions/register';

class RegisterPage extends Component {
  // Register a user
  registerMe(user) {
    this.props.dispatch(registerActions.register(user));
  }
  render() {
    const user = { username: 'John', password: 'admin' };
    // const { loggedIn } = this.props.user;
    const regButtons = this.props.loggedIn ? (
      <div>
        <h2>You are already logged in!</h2>
      </div>
    ) : (
      <div>
        <button
          onClick={() => this.registerMe(user)}
        ><h4>Register <i className="glyphicon glyphicon-ok" aria-hidden="true" /></h4>
        </button>
      </div>
    );
    return (
      <div className="form-page__wrapper">
        { regButtons }
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  const { user, loggedIn } = state.user;
  return {
    user, loggedIn,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(RegisterPage);
