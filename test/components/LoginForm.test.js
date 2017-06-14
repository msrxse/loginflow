import React from 'react';
import { mount, shallow } from 'enzyme';
import LoginForm from '../../src/components/Pages/components/form/LoginForm';

/* eslint-disable no-undef */

describe('loginform', () => {
  it('renders without crashing', () => {
    mount(<LoginForm />);
  });

  it('should call onSubmit when click submit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(
      <LoginForm onSubmit={onSubmit} />,
    );
    const button = wrapper.find('button');
    button.simulate('submit', { preventDefault: () => {} });
  });
});
