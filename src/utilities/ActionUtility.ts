import { ThunkDispatch } from 'redux-thunk';
import IAction from 'models/IAction';
import HttpErrorResponseModel from 'models/HttpErrorResponseModel';

export async function createThunkEffect<P>(
  dispatch: ThunkDispatch<{}, {}, any>,
  actionType: string,
  effect: (...args: any[]) => Promise<P | HttpErrorResponseModel>,
  ...args: any[]
): Promise<P | HttpErrorResponseModel> {
  dispatch(createAction(actionType));

  const response = await effect(...args);
  const isError = response instanceof HttpErrorResponseModel;

  dispatch(createAction(`${actionType}_FINISHED`, response, isError));

  return response;
}

export function createAction<T = undefined>(
  type: string,
  payload?: T,
  error: boolean = false,
  meta: any = null,
): IAction<T> {
  return { type, payload, error, meta };
}
