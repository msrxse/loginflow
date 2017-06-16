/*
 * LoginPage
 *
 * Users login on this page
 * Route: /login
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from './components/form/LoginForm';
import * as loginActions from '../../actions/login';

const LoginPage = ({ loginUser }) =>
  <div>
    <Form
      loginUser={loginUser}
    />
  </div>;

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
