import IAction from 'models/IAction';
import { call, put } from 'redux-saga/effects';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';

export function* createThunkEffect<P>(
  action: (...args: any[]) => IAction<any>,
  effect: (...args: any[]) => Promise<P | HttpErrorResponseModel>,
  ...args: any[]
): Generator {
  const response = yield call(effect, ...args);
  const isError = response instanceof HttpErrorResponseModel;

  return yield put(action(response, isError));
}

export function createAction<T = undefined>(
  type: string,
  payload?: T,
  error: boolean = false,
  meta: any = null,
): IAction<T> {
  return { type, payload, error, meta };
}
