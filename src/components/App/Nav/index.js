/**
 *
 * This component renders the navigation bar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
// import LoadingButton from '../../Pages/components/LoadingButton';
import * as registerActions from '../../../actions/auth';
import styles from './nav.css';

const Nav = ({ loggedIn, logoutUser }) => {
  // Render either the Log In and register buttons, or the logout button
  // based on the current authentication state.
  const navButtons = loggedIn ? (
    <div className="btn-toolbar">
      <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
      <Link className="btn btn-secondary" onClick={logoutUser}>Logout</Link>
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
};

Nav.propTypes = {
  loggedIn: PropTypes.bool,
  logoutUser: PropTypes.func,
  // currentlySending: PropTypes.bool,
};

Nav.defaultProps = {
  loggedIn: false,
  logoutUser: () => {},
  // currentlySending: false,
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
