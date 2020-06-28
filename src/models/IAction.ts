import { Action } from 'redux';

export default interface IAction<T> extends Action<string> {
  readonly type: string;
  readonly payload?: T;
  readonly error?: boolean;
  readonly meta?: any;
}
