import { call, put, takeLatest } from 'redux-saga/effects';
import createAPI from 'app/api/createAPI';
import * as Actions from './register.actions';
import * as Types from './register.types';

function* makeGetRegister() {
  const api = yield createAPI();
  const response = yield call(api.call, 'getRegister');
  yield put(Actions.setRegister(response.data));
}

export const registerSagas = [takeLatest(Types.GET_REGISTER, makeGetRegister)];
