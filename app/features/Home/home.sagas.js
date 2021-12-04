import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'app/api/createAPI';
import * as Actions from './home.actions';
import * as Types from './home.types';

function* makeGetHome() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getHome');
  yield put(Actions.setHome(response.data));
}

export const homeSagas = [takeLatest(Types.GET_HOME, makeGetHome)];
