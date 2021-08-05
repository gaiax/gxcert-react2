import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import Reducer from "./reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import initialState from "./initialState";

const persistConfig = {
  key: "root",
  storage,
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
