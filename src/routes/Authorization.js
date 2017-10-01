import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * HOC that Handles whether or not the user is allowed to see the page.
 * @param {array} allowedRoles - user roles that are allowed to see the page.
 * @returns {Component}
 */
export default function Authorization(allowedRoles) {
  return (WrappedComponent) => {
    const WithAuthorization = (props) => {
      const { user } = props;
      if (allowedRoles.includes(user.account_type)) {
        return <WrappedComponent {...props} />;
      }
      return <h1>No page for you!</h1>; // Redirect actually
    };
    function mapStateToProps(state) {
      const { user } = state.user;
      return {
        user,
      };
    }
    WithAuthorization.propTypes = {
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        account_type: PropTypes.string.isRequired,
      },
      ).isRequired,
    };
    // return connect(state => ({ user: state.user.user }))(WithAuthorization);
    return connect(mapStateToProps)(WithAuthorization);
  };
}
