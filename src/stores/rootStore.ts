import { createStore, applyMiddleware, compose, Middleware, Store, StoreEnhancer } from 'redux';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { createBrowserHistory, History } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import IStore from 'models/IStore';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import rootDependencies from './rootDependencies';

export const history: History = createBrowserHistory();

const initialState: Partial<IStore> = {};

const epicMiddleware: EpicMiddleware<any, any, any, any> = createEpicMiddleware(rootDependencies);

const middlewares: Middleware[] = [epicMiddleware, routerMiddleware(history)].filter(Boolean);
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers: StoreEnhancer =
  process.env.NODE_ENV === 'production' ? compose(...enhancers) : composeWithDevTools(...enhancers);

const store: Store<IStore> = createStore(
  rootReducer(history),
  initialState as any,
  composedEnhancers,
);

epicMiddleware.run(rootEpic);

export default store;
