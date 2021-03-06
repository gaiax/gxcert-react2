import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';

import { rootReducer } from './reducers';

const logger = createLogger();

export const history = createBrowserHistory();

export function configureStore(preloadedState) {
  const middlewares = [routerMiddleware(history), logger];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer(history), preloadedState, middlewareEnhancer);
  return store;
}
