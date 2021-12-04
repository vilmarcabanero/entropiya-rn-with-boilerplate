/*
 * Reducer actions related with Login
 */
import * as Types from './login.types';

export function login(loginPayload) {
  return {
    type: Types.LOGIN,
    loginPayload,
  };
}

export function logout(data) {
  return {
    type: Types.LOGOUT,
    data,
  };
}

export function loginLoading(isLoading) {
  return {
    type: Types.LOGIN_LOADING,
    isLoading,
  };
}

export function loginStatus(isLoggedIn) {
  return {
    type: Types.LOGIN_STATUS,
    isLoggedIn,
  };
}
