import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import Reducer from "./reducer";
import thunk from "redux-thunk";
import initialState from "./initialState";



const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    state: Reducer,
  }),
  initialState,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
