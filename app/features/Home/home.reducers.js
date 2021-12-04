/* Home Reducer
 * handles Home states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as Types from './home.types';

export const initialState = {
  data: [],
};

export const homeReducer = createReducer(initialState, {
  [Types.SET_HOME](state, { data }) {
    return {
      ...state,
      data,
    };
  },
});
