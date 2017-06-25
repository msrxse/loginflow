/*
 * RegisterPage
 *
 * Users login on this page
 * Route: /register
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as registerActions from '../../actions/auth';
import Form from './components/form/RegisterForm';

const RegisterPage = ({ registerUser }) =>
  <div>
    <Form
      registerUser={registerUser}
    />
  </div>;

RegisterPage.propTypes = {
  registerUser: PropTypes.func,
};

RegisterPage.defaultProps = {
  registerUser: false,
};

function mapDispatchToProps(dispatch) {
  return {
    registerUser: bindActionCreators(registerActions.register, dispatch),
  };
}

function mapStateToProps(state) {
  const { user, loggedIn } = state.data;
  return {
    user, loggedIn,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
