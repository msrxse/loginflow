import * as actionTypes from '../constants/actionTypes';

export function register(user) {
  return {
    type: actionTypes.ME_SET,
    user,
  };
}
