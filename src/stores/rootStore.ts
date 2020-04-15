import { createStore, applyMiddleware, compose, Middleware, Store, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import IStore from 'models/IStore';
import rootReducer from './rootReducer';

export const history: History = createBrowserHistory();

const initialState: Partial<IStore> = {};

const middlewares: Middleware[] = [thunk, routerMiddleware(history)].filter(Boolean);
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers: StoreEnhancer =
  process.env.NODE_ENV === 'production' ? compose(...enhancers) : composeWithDevTools(...enhancers);

const store: Store<IStore> = createStore(
  rootReducer(history),
  initialState as any,
  composedEnhancers,
);

export default store;
