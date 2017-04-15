import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './track';
import user from './register';

export default combineReducers({
  track,
  user,
  routing: routerReducer,
});
