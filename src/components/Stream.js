import React from 'react';
import { connect } from 'react-redux';

class Stream extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { tracks =[] } = this.props;
    return (
      <div>
        {
          tracks.map((track, key) => {
            return (
              <div className="track" key={key}>
                {track.title}
                <button onClick={() => this.setState({ [key]: !this.state[key] })} type="button">
                  { this.state[key] ? 'Dislike' : 'Like' }  
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  }
}

export default connect(mapStateToProps)(Stream);