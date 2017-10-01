import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * HOC that Handles whether or not the user is allowed to see the page.
 * @param {array} allowedRoles - user roles that are allowed to see the page.
 * @returns {Component}
 */
export default function Authorization(allowedRoles) {
  return (WrappedComponent) => {
    const WithAuthorization = () => {
      const { user } = this.props;
      if (allowedRoles.includes(user.account_type)) {
        return <WrappedComponent {...this.props} />;
      }
      return <h1>No page for you!</h1>; // Redirect actually
    };
    // function mapStateToProps(state) {
    //   const { user } = state.data;
    //   return {
    //     user,
    //   };
    // }

    return connect(state => ({ user: state.data.user }))(WithAuthorization);
  };
}
