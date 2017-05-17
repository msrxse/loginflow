/*
 * RegisterPage
 *
 * Users login on this page
 * Route: /register
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../../actions/register';
import Form from './components/form/RegisterForm';

class RegisterPage extends Component {
  render() {
    // const user = { username: 'John', password: 'admin' };
    // const { loggedIn } = this.props.user;
    const regButtons = this.props.loggedIn ? (
      <div>
        <h2>You are already logged in!</h2>
      </div>
    ) : (
      <div>
        {/* <button
          onClick={() => this.registerMe(user)}
        ><h4>Register <i className="glyphicon glyphicon-ok" aria-hidden="true" /></h4>
        </button> */}
        <Form
          registerUser={this.props.registerUser}
        />
      </div>
    );
    return (
      <div className="form-page__wrapper">
        { regButtons }
      </div>
    );
  }
}

RegisterPage.propTypes = {
  loggedIn: PropTypes.bool,
  registerUser: PropTypes.func,
};

RegisterPage.defaultProps = {
  loggedIn: false,
  registerUser: false,
};

function mapDispatchToProps(dispatch) {
  return {
    registerUser: bindActionCreators(registerActions.register, dispatch),
  };
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  const { user, loggedIn } = state.data;
  return {
    user, loggedIn,
  };
}

// Wrap the component to inject dispatch and state/actions into it
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
