import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Authorization from './Authorization';
import App from '../components/App';
import { HomePage, RegisterPage, LoginPage, Dashboard } from '../components/Pages';

// const User = Authorization(['user', 'manager', 'admin']);
const Manager = Authorization(['manager', 'admin']);
// const Admin = Authorization(['admin']);

export default function Routes() {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard" component={Manager(Dashboard)} />
    </Route>
  );
}
