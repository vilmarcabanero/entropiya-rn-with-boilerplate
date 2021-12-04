/* Login Reducer
 * handles Login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as Types from './login.types';

export const initialState = {
  isLoggedIn: false,
  isLoading: false,
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
});
