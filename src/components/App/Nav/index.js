/**
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { logout } from '../actions/AppActions';
import LoadingButton from '../../Pages/components/LoadingButton';
import styles from './nav.css';

class Nav extends Component {
  // logout() {
  //   this.props.dispatch(logout());
  // }
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link to="/dashboard" className="btn btn--dash btn--nav">Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className="btn--nav" />
        ) : (
          <button className="btn btn-default" onClick={this.logout}>Logout</button>
        )}
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
  currentlySending: PropTypes.bool,
};

Nav.defaultProps = {
  loggedIn: false,
  currentlySending: false,
};

function mapStateToProps(state) {
  const { loggedIn } = state.data;
  return {
    loggedIn,
  };
}

export default connect(mapStateToProps)(Nav);
