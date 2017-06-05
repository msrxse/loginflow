/**
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import LoadingButton from '../../Pages/components/LoadingButton';
import * as registerActions from '../../../actions/login';
import styles from './nav.css';

class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (
      <div className="btn-toolbar">
        <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
        <Link className="btn btn-secondary" onClick={this.props.logoutUser}>Logout</Link>
      </div>
    ) : (
      <div className="btn-toolbar">

        <Link to="/register" className="btn btn-secondary">Register</Link>

        <Link to="/login" className="btn btn-secondary">Login</Link>

      </div>
    );

    return (
      <div className={styles.nav}>
        <ul className="menu">
          <li>
            <Link to="/" className="logo"><h2 className="text_logo">Login&nbsp;Flow</h2></Link>
          </li>
          <li>
            { navButtons }
          </li>
        </ul>
      </div>
    );
  }
}

Nav.propTypes = {
  loggedIn: PropTypes.bool,
  logoutUser: PropTypes.func,
  currentlySending: PropTypes.bool,
};

Nav.defaultProps = {
  loggedIn: false,
  logoutUser: false,
  currentlySending: false,
};

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: bindActionCreators(registerActions.logout, dispatch),
  };
}

function mapStateToProps(state) {
  const { loggedIn } = state.data;
  return {
    loggedIn,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
