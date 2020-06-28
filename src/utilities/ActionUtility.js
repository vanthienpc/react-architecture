import HttpErrorResponseModel from 'models/HttpErrorResponseModel';

export async function createThunkEffect(dispatch, actionType, effect, ...args) {
  dispatch(createAction(actionType));

  const response = await effect(...args);
  const isError = response instanceof HttpErrorResponseModel;

  dispatch(createAction(`${actionType}_FINISHED`, model, isError));

  return response;
}

export function createAction(type, payload, error = false, meta = null) {
  return { type, payload, error, meta };
}
