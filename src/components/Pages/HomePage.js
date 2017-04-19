/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.css';

function HomePage({ tracks = [] }) {
  return (
    <div className={styles.main}>
      { /* eslint-disable react/no-array-index-key */
        tracks.map((track, key) => <div className="track" key={key}>{track.title}</div>)
      }
    </div>
  );
}

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks,
  };
}

HomePage.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  tracks: PropTypes.array,
};

HomePage.defaultProps = {
  tracks: [],
};
export default connect(mapStateToProps)(HomePage);
