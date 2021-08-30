
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
    case "ON_CHANGE_URL":
      return Object.assign({}, state, {
        url: action.payload
      });
    case "ON_CHANGE_TO":
      return Object.assign({}, state, {
        to: action.payload
      });
    case "ON_CHANGE_GROUP_NAME":
      return Object.assign({}, state, {
        groupName: action.payload,
      });
    case "ON_CHANGE_GROUP_ADDRESS":
      return Object.assign({}, state, {
        groupAddress: action.payload,
      });
    case "ON_CHANGE_GROUP_PHONE":
      return Object.assign({}, state, {
        groupPhone: action.payload,
      });
    case "ON_CHANGE_GROUP":
      return Object.assign({}, state, {
        groupId: parseInt(action.payload),
      });
    case "ON_CHANGE_PROFILE_NAME":
      return Object.assign({}, state, {
        profileName: action.payload,
      });
    case "ON_CHANGE_PROFILE_EMAIL":
      return Object.assign({}, state, {
        profileEmail: action.payload,
      });
    case "ON_CHANGE_PROFILE_EMAIL":
      return Object.assign({}, state, {
        profileEmail: action.payload,
      });
    case "ON_CHANGE_PROFILE_IMAGE":
      return Object.assign({}, state, {
        image: action.payload,
      });
    case "LOGGED_IN":
      return Object.assign({}, state, {
        from: action.payload,
      });
    case "FETCHED_CERTIFICATE":
      return Object.assign({}, state, {
        certificate: action.payload,
      });
    case "FETCHED_CERTIFICATES":
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
    case "FETCHED_GROUP":
      return Object.assign({}, state, {
        group: action.payload,
      });
    default:
      return initialState;
  }
}

