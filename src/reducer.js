
import initialState from "./initialState";

export default function Reducer(state=initialState, action) {
  switch(action.type) {
    case "ON_CHANGE_TITLE":
      return Object.assign({}, state, {
        title: action.payload
      });
    case "ON_CHANGE_DESCRIPTION":
      return Object.assign({}, state, {
        description: action.payload
      });
    case "ON_CHANGE_IMAGE":
      return Object.assign({}, state, {
        image: action.payload
      });
    case "ON_CHANGE_GROUP":
      return Object.assign({}, state, {
        groupId: action.payload
      });
    case "ON_CHANGE_GROUP_NAME":
      return Object.assign({}, state, {
        groupName: action.payload,
      });
    case "ON_CHANGE_GROUP_ADDRESS":
      return Object.assign({}, state, {
        groupAddress: action.payload,
      });
    case "ON_CHANGE_GROUP_IN_SIDEBAR":
      console.log(action.payload);
      return Object.assign({}, state, {
        groupInSidebar: action.payload,
      });
    case "ON_CHANGE_GROUP_PHONE":
      return Object.assign({}, state, {
        groupPhone: action.payload,
      });
    case "ON_CHANGE_GROUP_MEMBER_TO_INVITE":
      return Object.assign({}, state, {
        groupMemberToInvite: action.payload,
      });
    case "ON_CHANGE_GROUP_ID_IN_EDIT":
      return Object.assign({}, state, {
        groupIdInEdit: action.payload,
      });
    case "ON_CHANGE_GROUP_NAME_IN_EDIT":
      return Object.assign({}, state, {
        groupNameInEdit: action.payload,
      });
    case "ON_CHANGE_GROUP_ADDRESS_IN_EDIT":
      return Object.assign({}, state, {
        groupAddressInEdit: action.payload,
      });
    case "ON_CHANGE_GROUP_PHONE_IN_EDIT":
      return Object.assign({}, state, {
        groupPhoneInEdit: action.payload,
      });
    case "ON_CHANGE_PROFILE_NAME":
      return Object.assign({}, state, {
        profileName: action.payload,
      });
    case "ON_CHANGE_PROFILE_EMAIL":
      return Object.assign({}, state, {
        profileEmail: action.payload,
      });
    case "ON_CHANGE_PROFILE_IMAGE":
      return Object.assign({}, state, {
        profileImage: action.payload,
      });
    case "ON_CHANGE_PROFILE_NAME_IN_EDIT":
      return Object.assign({}, state, {
        profileNameInEdit: action.payload,
      });
    case "ON_CHANGE_PROFILE_EMAIL_IN_EDIT":
      return Object.assign({}, state, {
        profileEmailInEdit: action.payload,
      });
    case "ON_CHANGE_PROFILE_IMAGE_IN_EDIT":
      return Object.assign({}, state, {
        profileImageInEdit: action.payload,
      });
    case "ON_CHANGE_TO_IN_ISSUE":
      return Object.assign({}, state, {
        toInIssue: action.payload,
      });
    case "LOGGED_IN":
      return Object.assign({}, state, {
        from: action.payload,
      });
    case "FETCHED_CERTIFICATE":
      return Object.assign({}, state, {
        certificate: action.payload,
      });
    case "FETCHED_CERTIFICATE_IN_ISSUE":
      return Object.assign({}, state, {
        certificateInIssue: action.payload,
      });
    case "FETCHED_CERTIFICATES":
      if (action.payload === null) {
        return Object.assign({}, state, {
          certificates: null,
        });
      }
      return Object.assign({}, state, {
        certificates: action.payload,
      });
    case "FETCHED_CERTIFICATE_IMAGE":
      return Object.assign({}, state, {
        certificateImage: action.payload,
      });
    case "FETCHED_GROUPS":
      return Object.assign({}, state, {
        groups: action.payload,
      });
    case "FETCHED_GROUPS_IN_SIDEBAR":
      return Object.assign({}, state, {
        groupsInSidebar: action.payload,
      });
    case "FETCHED_GROUP":
      return Object.assign({}, state, {
        group: action.payload,
      });
    case "FETCHED_GROUP_IN_EDIT":
      return Object.assign({}, state, {
        groupInEdit: action.payload,
      });
    case "FETCHED_CERTIFICATES_IN_ISSUER":
      return Object.assign({}, state, {
        certificatesInIssuer: action.payload,
      });
    case "FETCHED_PROFILE_IN_EDIT":
      return Object.assign({}, state, {
        profileInEdit: action.payload,
      });
    default:
      return initialState;
  }
}

