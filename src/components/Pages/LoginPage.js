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
import { bindActionCreators } from 'redux';
// import Form from './components/Form';
import Form from './components/form/LoginForm';
import * as loginActions from '../../actions/login';
// import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';
// import LoadingIndicator from '../LoadingIndicator.react';

class LoginPage extends Component {
  render() {
    // const dispatch = this.props.dispatch;
    return (
      <div>
        <Form
          loginUser={this.props.loginUser}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  formState: PropTypes.object,
  currentlySending: PropTypes.bool,
  loginUser: PropTypes.func,
};

LoginPage.defaultProps = {
  formState: {},
  currentlySending: false,
  loginUser: false,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginActions.login, dispatch),
  };
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  const { formState, currentlySending } = state.data;
  return {
    formState,
    currentlySending,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
