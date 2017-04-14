/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

function HomePage({ tracks = [] }) {
  return (
    <div>
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
