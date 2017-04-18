/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

function HomePage({ tracks = [] }) {
  return (
    <div className={styles.main}>
      {
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

export default connect(mapStateToProps)(HomePage);
