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
import Form from './components/form/LoginForm';
import * as loginActions from '../../actions/login';

class LoginPage extends Component {
  render() {
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
  loginUser: PropTypes.func,
};

LoginPage.defaultProps = {
  loginUser: false,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginActions.login, dispatch),
  };
}

function mapStateToProps(state) {
  const { formState, currentlySending } = state.data;
  return {
    formState,
    currentlySending,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
