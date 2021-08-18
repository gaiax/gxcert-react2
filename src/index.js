import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PersistGate } from 'redux-persist/integration/react'
import { connect, Provider } from "react-redux";
import store, { persistor } from "./store";
import { withRouter, HashRouter as Router } from "react-router-dom";
import {
  onChangeTitle,
  onChangeDescription,
  onChangeUrl,
  onChangeFrom,
  onChangeTo,
  onChangeImage,
  sign,
  loggedIn,
} from "./actions";
//import CertClient from "./client"

function mapStateToProps(state, props) {
  return state;
}

function mapDispatchToProps(dispatch, props) {
  return {
    onChangeTitle: (evt) => {
      dispatch(onChangeTitle(evt));
    },
    onChangeDescription: (evt) => {
      dispatch(onChangeDescription(evt));
    },
    onChangeUrl: (evt) => {
      dispatch(onChangeUrl(evt));
    },
    onChangeFrom: (evt) => {
      dispatch(onChangeFrom(evt));
    },
    onChangeTo: (evt) => {
      dispatch(onChangeTo(evt));
    },
    onChangeImage: (evt) => {
      dispatch(onChangeImage(evt));
    },
    sign: () => {
      dispatch(sign());
    },
    loggedIn: (address) => {
      dispatch(loggedIn(address));
    }
  }
}

const RxApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <RxApp />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
