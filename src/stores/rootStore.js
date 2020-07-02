import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootEpic from './rootEpic';
import rootReducer from './rootReducer';
import rootDependencies from './rootDependencies';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware(rootDependencies);

const middlewares = [epicMiddleware, routerMiddleware(history)];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers =
  process.env.NODE_ENV === 'production' ? compose(...enhancers) : composeWithDevTools(...enhancers);

const store = createStore(rootReducer(history), composedEnhancers);

epicMiddleware.run(rootEpic);

export default store;
