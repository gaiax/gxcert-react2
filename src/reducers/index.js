import { History } from 'history';
import { combineReducers } from 'redux';
import { RouterState, connectRouter } from 'connected-react-router';

export const rootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
  });
}
