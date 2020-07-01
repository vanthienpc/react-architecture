import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)].filter(Boolean);
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers =
  process.env.NODE_ENV === 'production' ? compose(...enhancers) : composeWithDevTools(...enhancers);

const store = createStore(rootReducer(history), composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
