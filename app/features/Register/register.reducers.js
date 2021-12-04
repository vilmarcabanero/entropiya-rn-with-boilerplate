/* Register Reducer
 * handles Register states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as Types from './register.types';

export const initialState = {
  data: [],
};

export const registerReducer = createReducer(initialState, {
  [Types.SET_REGISTER](state, { data }) {
    return {
      ...state,
      data,
    };
  },
});
