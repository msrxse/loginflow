/*
 * LoginPage
 *
 * Users login on this page
 * Route: /login
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Form from './components/Form';
import Form from './components/form/LoginForm';
// import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';
// import LoadingIndicator from '../LoadingIndicator.react';

class LoginPage extends Component {
  login(username, password) {
    // this.props.dispatch(login(username, password));
    console.log('login method called');
  }

  render() {
    // const dispatch = this.props.dispatch;
    return (
      <div>
        <Form />
      </div>
    );
  }
}

LoginPage.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  formState: PropTypes.object,
  currentlySending: PropTypes.bool,
};

LoginPage.defaultProps = {
  formState: {},
  currentlySending: false,
};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  const { formState, currentlySending } = state.data;
  return {
    formState,
    currentlySending,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(LoginPage);
