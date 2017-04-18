/**
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
// import { logout } from '../actions/AppActions';
import LoadingButton from './LoadingButton';
import styles from './Nav.css';

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
          <a href="#" className="btn btn-default" onClick={this.logout}>Logout</a>
        )}
      </div>
    ) : (
      <div>
        <Link to="/" className="nav__logo-wrapper"><h2 className="nav__logo">Login&nbsp;Flow</h2></Link>
        <Link to="/register" className="btn btn-primary">Register</Link>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    );

    return (
      <div className={styles.nav}>
        <div className="wrapper">

          { navButtons }
        </div>
      </div>
    );
  }
}

// Nav.propTypes = {
//   loggedIn: React.PropTypes.bool.isRequired,
//   currentlySending: React.PropTypes.bool.isRequired,
// };

export default Nav;
