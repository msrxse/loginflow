/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import styles from './styles.css';

function HomePage({ tracks = [], data }) {
  const { loggedIn } = data;
  return (
    <div>
      <p>This application demonstrates what a React.js based register/login workflow might look like on the Frontend. </p>
      <p>Any click in Register/Login mocks a log in. Eventually I will set actual auth so registered users are saved to localStorage and persist across page reloads.</p>
      {loggedIn ? (
        <h1>Welcome to Login Flow, you are logged in!</h1>
      ) : (
        <h1>Welcome to Login Flow!</h1>
      )}
      <p>Shortly registered users will be saved to localStorage, so they will persist across page reloads.</p>
      {loggedIn ? (
        <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
      ) : (
        <div>
          <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/register" className="btn btn-secondary">Register</Link>
        </div>
      )}

      <div className={styles.main}>
        { /* eslint-disable react/no-array-index-key */
          tracks.map((track, key) => <div className="track" key={key}>{track.title}</div>)
        }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const tracks = state.track;
  const data = state.data;
  return {
    tracks,
    data,
  };
}

HomePage.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  tracks: PropTypes.array,
  data: PropTypes.object,
};

HomePage.defaultProps = {
  tracks: [],
  data: {},
};
export default connect(mapStateToProps)(HomePage);
