import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import Reducer from "./reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist'
import sessionStorage from 'redux-persist/lib/storage/session'
import initialState from "./initialState";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  blacklist: [
    "isLoading",
  ],
}

const persistedReducer = persistReducer(persistConfig, Reducer);

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    state: persistedReducer,
  }),
  initialState,
  storeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default store;
