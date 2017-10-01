import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './track';
import data from './auth';
import user from './user';

export default combineReducers({
  track,
  data,
  user,
  routing: routerReducer,
});
