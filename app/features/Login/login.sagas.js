import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'app/api/createAPI';
import * as Actions from './login.actions';
import * as Types from './login.types';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { validateEmail } from '../../utils/validator';

function* makeLogin({ loginPayload }) {
  yield put(Actions.loginErrorPassword(''));
  yield put(Actions.loginErrorEmail(''));
  if (!loginPayload.email.length) {
    yield put(Actions.loginErrorEmail("Email can't be empty"));
  } else if (!validateEmail(loginPayload.email)) {
    yield put(Actions.loginErrorEmail('Valid email is required.'));
  } else {
    yield put(Actions.loginLoading(true));
    const api = yield createAPI();
    const response = yield call(api.call, 'login', loginPayload);
    yield put(Actions.loginLoading(false));
    if (response.ok) {
      yield put(Actions.loginStatus(true));
      yield AsyncStorage.setItem('authToken', response.data.accessToken);
    } else {
      if (!response.data) {
        //No connection
        Alert.alert('Please connect to internet.');
      } else if (response.data.message === 'invalid-password') {
        yield put(Actions.loginErrorPassword('Password is incorrect.'));
      } else if (response.data.message === 'not-registered') {
        yield put(Actions.loginErrorEmail('Email is not yet registered.'));
      } else {
        Alert.alert('Something went wrong');
      }
      yield put(Actions.loginStatus(false));
    }
  }
}

function* makeLogout() {
  yield put(Actions.loginStatus(false));
  yield AsyncStorage.removeItem('authToken');
}

export const loginSagas = [
  takeLatest(Types.LOGIN, makeLogin),
  takeLatest(Types.LOGOUT, makeLogout),
];
