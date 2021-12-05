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

export function loginErrorEmail(error) {
  return {
    type: Types.LOGIN_ERROR_EMAIL,
    error,
  };
}

export function loginErrorPassword(error) {
  return {
    type: Types.LOGIN_ERROR_PASSWORD,
    error,
  };
}

export function togglePasswordVisibility(toggle) {
  return {
    type: Types.TOGGLE_PASSWORD_VISIBILITY,
    toggle,
  };
}
