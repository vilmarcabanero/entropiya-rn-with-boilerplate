/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { loginSagas } from 'app/features/Login/sagas';
import { taskSagas } from 'app/features/Task/task.sagas';

// export default [loginSaga];

export default function* rootSaga() {
  yield all([...loginSagas, ...taskSagas]);
}
