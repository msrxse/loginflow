import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function setTracks(state, action) {
  const { tracks } = action;
  return [...state, ...tracks];
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
    default:
      return state;
  }
}
