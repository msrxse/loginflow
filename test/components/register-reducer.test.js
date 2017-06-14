import reducer from '../../src/reducers/register';
// import * as actionTypes from '../../src/constants/actionTypes';

/* eslint-disable no-undef */

describe('Register reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        formState: {
          username: '',
          password: '',
        },
        currentlySending: false,
        loggedIn: false,
      },
    );
  });
});
