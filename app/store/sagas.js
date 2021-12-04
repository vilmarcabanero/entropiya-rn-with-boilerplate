/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { loginSagas } from 'app/features/Login/login.sagas';
import { userSagas } from 'app/features/User/user.sagas';

// export default [loginSaga];

export default function* rootSaga() {
  yield all([...loginSagas, ...userSagas]);
}
