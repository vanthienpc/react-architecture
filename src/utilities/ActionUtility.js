import { call, put } from 'redux-saga/effects';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';

export function* createSagaEffect(action, effect, ...args) {
  const response = yield call(effect, ...args);
  const isError = response instanceof HttpErrorResponseModel;

  return yield put(action(response, isError));
}

export function createAction(type, payload, error = false, meta = null) {
  return { type, payload, error, meta };
}
