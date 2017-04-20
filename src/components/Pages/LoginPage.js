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
import Form from './components/Form';
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
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">Login</h2>
          </div>
          {/* While the form is sending, show the loading indicator,
            otherwise show "Log in" on the submit button */}
          <Form
            data={this.props.formState}
            // dispatch={dispatch}
            // location={location}
            // history={this.props.history}
            onSubmit={this.login}
            btnText={'Login'}
            currentlySending={this.props.currentlySending}
          />
        </div>
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
