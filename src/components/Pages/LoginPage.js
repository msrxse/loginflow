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
import * as loginActions from '../../actions/auth';

const LoginPage = ({ loginUser, currentlySending }) =>
  <div>
    <Form
      loginUser={loginUser}
      currentlySending={currentlySending}
    />
  </div>;

LoginPage.propTypes = {
  loginUser: PropTypes.func,
  currentlySending: PropTypes.bool,
};

LoginPage.defaultProps = {
  loginUser: false,
  currentlySending: false,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: bindActionCreators(loginActions.login, dispatch),
  };
}

function mapStateToProps(state) {
  const { formState, currentlySending } = state.data;
  return {
    formState,  // This is using redux but i am using compoonent state
    currentlySending,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
