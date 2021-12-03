/* Task Reducer
 * handles Task states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as Types from './task.types';

export const initialState = {
  data: [],
};

export const taskReducer = createReducer(initialState, {
  [Types.SET_TASK](state, { data }) {
    return {
      ...state,
      data,
    };
  },
});
