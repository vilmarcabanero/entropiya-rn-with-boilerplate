/* Login Reducer
 * handles Login states in the app
 */
import createReducer from 'app/lib/createReducer';
import { Alert } from 'react-native';
import * as Types from './login.types';

export const initialState = {
  isLoggedIn: false,
  isLoading: false,
  emailError: '',
  passwordError: '',
  passwordTextIsShown: null,
};

export const loginReducer = createReducer(initialState, {
  [Types.LOGIN_STATUS](state, { isLoggedIn }) {
    return {
      ...state,
      isLoggedIn,
    };
  },
  [Types.LOGIN_LOADING](state, { isLoading }) {
    return {
      ...state,
      isLoading,
    };
  },
  [Types.LOGIN_ERROR_EMAIL](state, { error }) {
    return {
      ...state,
      emailError: error,
    };
  },
  [Types.LOGIN_ERROR_PASSWORD](state, { error }) {
    return {
      ...state,
      passwordError: error,
    };
  },
  [Types.LOGIN_ERROR_PASSWORD](state, { error }) {
    return {
      ...state,
      passwordError: error,
    };
  },
  [Types.TOGGLE_PASSWORD_VISIBILITY](state, { toggle }) {
    return {
      ...state,
      passwordTextIsShown: toggle,
    };
  },
});
