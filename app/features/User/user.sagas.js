import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'app/api/createAPI';
import * as Actions from './user.actions';
import * as Types from './user.types';
import { Alert } from 'react-native';

function* makeGetUser() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getUser');
  yield put(Actions.setUser(response.data));
}

export const userSagas = [takeLatest(Types.GET_USER, makeGetUser)];
