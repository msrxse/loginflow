import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import { HomePage, RegisterPage, LoginPage, Dashboard } from '../components/Pages';

export default function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  );
}
