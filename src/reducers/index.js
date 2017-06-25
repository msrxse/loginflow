import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './track';
import data from './auth';

export default combineReducers({
  track,
  data,
  routing: routerReducer,
});
