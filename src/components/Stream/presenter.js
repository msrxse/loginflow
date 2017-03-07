import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => <div className="track" key={key}>{track.title}</div>)
      }
    </div>
  );
}

export default Stream;
