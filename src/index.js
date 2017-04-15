/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import HomePage from './components/Pages/HomePage';
import RegisterPage from './components/Pages/RegisterPage';
import LoginPage from './components/Pages/LoginPage';

const tracks = [
  {
    title: 'Some track',
  },
  {
    title: 'Some other track',
  },
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'),
);

// module.hot.accept();
