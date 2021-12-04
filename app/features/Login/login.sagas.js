import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'app/api/createAPI';
import * as Actions from './login.actions';
import * as UserActions from '../User/user.actions';
import * as Types from './login.types';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


function* makeLogin({ loginPayload }) {

  yield put(Actions.loginLoading(true));
  const api = yield createAPI();
  const response = yield call(api.call, 'login', loginPayload);
  yield put(Actions.loginLoading(false));
  if (response.ok) {
    yield AsyncStorage.setItem('authToken', response.data.accessToken);
    yield put(Actions.loginStatus(true));
  } else {
    Alert.alert('fail: ', response.data.message);
    yield put(Actions.loginStatus(false));
  }
}

function* makeLogout() {
  yield put(Actions.loginStatus(false));
  yield AsyncStorage.removeItem('authToken');
  yield put(UserActions.isUserDetailsStateChanged());
}

export const loginSagas = [
  takeLatest(Types.LOGIN, makeLogin),
  takeLatest(Types.LOGOUT, makeLogout),
];
