import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { connect, Provider } from "react-redux";
import { withRouter, HashRouter as Router } from "react-router-dom";
import store from "./store";
import history from "./history";
import {
  onChangeTitle,
  onChangeDescription,
  onChangeImage,
  onChangeToInIssue,
  onChangeGroup,
  onChangeGroupName,
  onChangeGroupAddress,
  onChangeGroupPhone,
  onChangeProfileName,
  onChangeProfileEmail,
  onChangeProfileImage,
  onChangeGroupNameInEdit,
  onChangeGroupIdInEdit,
  onChangeGroupAddressInEdit,
  onChangeGroupPhoneInEdit,
  onChangeProfileNameInEdit,
  onChangeProfileEmailInEdit,
  onChangeProfileImageInEdit,
  onChangeGroupMemberToInvite,
  onChangeGroupInSidebar,
  sign,
  signIn,
  signOut,
  fetchCertificate,
  fetchCertificates,
  fetchCertificatesInIssuer,
  fetchGroups,
  fetchGroup,
  fetchGroupInEdit,
  fetchGroupInShow,
  fetchGroupsInIssuer,
  fetchCertificateInIssue,
  fetchProfileInEdit,
  fetchGroupsInSidebar,
  invalidateUserCert,
  updateProfile,
  updateGroup,
  issue,
  registerGroup,
  registerProfile,
  inviteMember,
  disableGroupMember,
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
    onChangeImage: (evt) => {
      dispatch(onChangeImage(evt));
    },
    onChangeGroupName: (evt) => {
      dispatch(onChangeGroupName(evt));
    },
    onChangeGroupAddress: (evt) => {
      dispatch(onChangeGroupAddress(evt));
    },
    onChangeGroupPhone: (evt) => {
      dispatch(onChangeGroupPhone(evt));
    },
    onChangeGroupNameInEdit: (evt) => {
      dispatch(onChangeGroupNameInEdit(evt));
    },
    onChangeGroupAddressInEdit: (evt) => {
      dispatch(onChangeGroupAddressInEdit(evt));
    },
    onChangeGroupPhoneInEdit: (evt) => {
      dispatch(onChangeGroupPhoneInEdit(evt));
    },
    onChangeProfileName: (evt) => {
      dispatch(onChangeProfileName(evt));
    },
    onChangeProfileEmail: (evt) => {
      dispatch(onChangeProfileEmail(evt));
    },
    onChangeProfileImage: (evt) => {
      dispatch(onChangeProfileImage(evt));
    },
    onChangeProfileNameInEdit: (evt) => {
      dispatch(onChangeProfileNameInEdit(evt));
    },
    onChangeProfileEmailInEdit: (evt) => {
      dispatch(onChangeProfileEmailInEdit(evt));
    },
    onChangeProfileImageInEdit: (evt) => {
      dispatch(onChangeProfileImageInEdit(evt));
    },
    onChangeGroup: (evt) => {
      dispatch(onChangeGroup(evt));
    },
    onChangeToInIssue: (evt) => {
      dispatch(onChangeToInIssue(evt));
    },
    onChangeGroupMemberToInvite: (evt) => {
      dispatch(onChangeGroupMemberToInvite(evt));
    },
    onChangeGroupInSidebar: (evt) => {
      dispatch(onChangeGroupInSidebar(evt));
    },
    sign: () => {
      dispatch(sign());
    },
    fetchCertificate: (cid) => {
      dispatch(fetchCertificate(cid));
    },
    fetchCertificates: () => {
      dispatch(fetchCertificates());
    },
    fetchGroups: () => {
      dispatch(fetchGroups());
    },
    fetchGroup: (groupId) => {
      dispatch(fetchGroup(groupId));
    },
    fetchGroupInShow: (groupId) => {
      dispatch(fetchGroupInShow(groupId));
    },
    fetchGroupInEdit: (groupId) => {
      dispatch(fetchGroupInEdit(groupId));
    },
    fetchCertificatesInIssuer: () => {
      dispatch(fetchCertificatesInIssuer());
    },
    fetchCertificateInIssue: (certId) => {
      dispatch(fetchCertificateInIssue(certId));
    },
    fetchGroupsInSidebar: () => {
      dispatch(fetchGroupsInSidebar());
    },
    fetchProfileInEdit: () => {
      dispatch(fetchProfileInEdit());
    },
    signIn: () => {
      dispatch(signIn());
    },
    registerGroup: () => {
      dispatch(registerGroup());
    },
    updateGroup: () => {
      dispatch(updateGroup());
    },
    updateProfile: () => {
      dispatch(updateProfile());
    },
    registerProfile: () => {
      dispatch(registerProfile());
    },
    inviteMember: () => {
      dispatch(inviteMember());
    },
    issue: (certId) => {
      dispatch(issue(certId));
    },
    disableGroupMember: (groupId, address) => {
      dispatch(disableGroupMember(groupId, address));
    },
    invalidateUserCert: (userCertId) => {
      dispatch(invalidateUserCert(userCertId));
    },
    signOut: () => {
      dispatch(signOut());
    }
  }
}

const RxApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RxApp />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
