/* User Reducer
 * handles User states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as Types from './user.types';

export const initialState = {
  userDetails: {},
  userDetailsState: null,
};

export const userReducer = createReducer(initialState, {
  [Types.SET_USER](state, { userDetails }) {
    return {
      ...state,
      userDetails: { ...userDetails },
    };
  },
    [Types.IS_USER_DETAILS_STATE_CHANGED](state) {
    return {
      ...state,
      userDetailsState: Math.random(),
    };
  },
});
