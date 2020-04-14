import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers =
  process.env.NODE_ENV === 'production' ? compose(...enhancers) : composeWithDevTools(...enhancers);

const store = createStore(rootReducer(history), composedEnhancers);

export default store;
