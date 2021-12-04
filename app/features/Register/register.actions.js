/*
 * Reducer actions related with Register
 */
import * as Types from './register.types';

export function setRegister(data) {
  return {
    type: Types.SET_REGISTER,
    data,
  };
}

export function getRegister() {
  return {
    type: Types.GET_REGISTER,
  };
}
