import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../../src/components/Pages/components/form/LoginForm';

/* eslint-disable no-undef */

describe('loginform', () => {
  it('renders without crashing', () => {
    mount(<LoginForm />);
  });
});
