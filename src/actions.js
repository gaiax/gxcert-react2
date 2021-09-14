import { getGxCert, getGxCertWithoutLogin } from "./gxcert-client";
import { getImageOnIpfs, createImageUrlFromUint8Array } from "./util/ipfs";
import torusClient from "./torus";
import history from "./history";


function doNTimes(callback, n, ms) {
  for (let i = 0; i < n; i++) {
    setTimeout(callback, i * ms);
  }
}
async function getImageOnIpfsOrCache(cid, dispatch, getState) {
  const state = getState().state;
  let imageCache = state.imageCache;
  if (cid in imageCache) {
    return imageCache[cid];
  }
  const imageUrl = await getImageOnIpfs(cid);
  imageCache = getState().state.imageCache;
  imageCache[cid] = imageUrl;
  dispatch({
    type: "UPDATE_IMAGE_CACHE",
    payload: imageCache,
  });
  return imageUrl;


}
function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 6000);
  });
}
const onChangeTitle = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_TITLE",
    payload: evt.target.value,
  });
}
const onChangeDescription = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_DESCRIPTION",
    payload: evt.target.value,
  });
}
const onChangeImage = (evt) => async (dispatch, getState) => {
  const file = evt.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    dispatch({
      type: "ON_CHANGE_IMAGE",
      payload: reader.result,
    });
  }
  reader.readAsArrayBuffer(file);
}
const onChangeGroup = (evt) => async (dispatch, getState) => {
  if (evt.target.value === "new") {
    history.push("/group/new");
    return;
  }
  dispatch({
    type: "ON_CHANGE_GROUP",
    payload: parseInt(evt.target.value),
  });
}

const onChangeToInIssue = (evt) => async (dispatch) => {
  dispatch({
    type: "ON_CHANGE_TO_IN_ISSUE",
    payload: evt.target.value,
  });
}

const onChangeGroupIdInEdit = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_ID_IN_EDIT",
    payload: evt.target.value,
  });
}
const onChangeGroupNameInEdit = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_NAME_IN_EDIT",
    payload: evt.target.value,
  });
}
const onChangeGroupAddressInEdit = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_ADDRESS_IN_EDIT",
    payload: evt.target.value,
  });
}
const onChangeGroupPhoneInEdit = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_PHONE_IN_EDIT",
    payload: evt.target.value,
  });
}

const onChangeGroupName = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_NAME",
    payload: evt.target.value,
  });
}

const onChangeGroupAddress = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_ADDRESS",
    payload: evt.target.value,
  });
}
const onChangeGroupPhone = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_PHONE",
    payload: evt.target.value,
  });
}

const onChangeProfileName = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_PROFILE_NAME",
    payload: evt.target.value,
  });
}

const onChangeProfileEmail = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_PROFILE_EMAIL",
    payload: evt.target.value,
  });
}

const onChangeProfileImage = (evt) => async (dispatch, getState) => {
  const file = evt.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    dispatch({
      type: "ON_CHANGE_PROFILE_IMAGE",
      payload: reader.result,
    });
  }
  reader.readAsArrayBuffer(file);
}
const onChangeProfileNameInEdit = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_PROFILE_NAME_IN_EDIT",
    payload: evt.target.value,
  });
}

const onChangeProfileEmailInEdit = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_PROFILE_EMAIL_IN_EDIT",
    payload: evt.target.value,
  });
}

const onChangeProfileImageInEdit = (evt) => async (dispatch, getState) => {
  const file = evt.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    dispatch({
      type: "ON_CHANGE_PROFILE_IMAGE_IN_EDIT",
      payload: reader.result,
    });
  }
  reader.readAsArrayBuffer(file);
}

const onChangeGroupMemberToInvite = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_MEMBER_TO_INVITE",
    payload: evt.target.value,
  });
}

const fetchCertificateInIssue = (certId) => async (dispatch) => {
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }
  let certificate;
  try {
    certificate = await gxCert.getCert(certId);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_CERTIFICATE_IN_ISSUE",
    payload: certificate,
  });
}

const fetchCertificate = (userCertId) => async (dispatch, getState) => {
  dispatch({
    type: "FETCHED_CERTIFICATE",
    payload: null,
  });
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }
  let userCert;
  try {
    userCert = await gxCert.getUserCert(userCertId);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_CERTIFICATE",
    payload: userCert,
  });
  const imageCid = userCert.certificate.image;
  let imageUrl;
  try {
    imageUrl = await getImageOnIpfsOrCache(imageCid, dispatch, getState);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_CERTIFICATE_IMAGE",
    payload: imageUrl,
  });
  try {
    const group = await gxCert.getGroup(userCert.certificate.groupId);
    userCert.certificate.group = group;
    dispatch({
      type: "FETCHED_CERTIFICATE",
      payload: userCert,
    });
  } catch(err) {
    console.error(err);
    return;
  }
  try {
    const profile = await gxCert.getProfile(userCert.to);
    userCert.to = profile.name;
    dispatch({
      type: "FETCHED_CERTIFICATE",
      payload: userCert,
    });
  } catch(err) {
    console.error(err);
    return;
  }
}

const fetchCertificates = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCHED_CERTIFICATES",
    payload: null,
  });
  const state = getState().state;
  const address = state.from;
  if (address === "" || !address) {
    history.push("/top");
    return;
  }
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }
  let userCerts;
  try {
    userCerts = await gxCert.getReceivedUserCerts(address);
  } catch(err) {
    console.error(err);
    return;
  }
  for (let i = 0; i < userCerts.length; i++) {
    gxCert.getGroup(userCerts[i].certificate.groupId).then(group => {
      userCerts[i].certificate.groupName = group.name;
      dispatch({
        type: "FETCHED_CERTIFICATES",
        payload: userCerts,
      });
    });
    getImageOnIpfsOrCache(userCerts[i].certificate.image, dispatch, getState).then(imageUrl => {
      userCerts[i].certificate.imageUrl = imageUrl;
      dispatch({
        type: "FETCHED_CERTIFICATES",
        payload: userCerts,
      });
    });
  }
  dispatch({
    type: "FETCHED_CERTIFICATES",
    payload: userCerts,
  });
}

const fetchGroupsInSidebar = () => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const address = gxCert.address;
  let groups;
  try {
    groups = await gxCert.getGroups(address);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_GROUPS_IN_SIDEBAR",
    payload: groups,
  });

}

const fetchGroupInShow = (groupId) => async (dispatch, getState) => {
  dispatch({
    type: "FETCHED_GROUP_IN_SHOW",
    payload: null,
  });
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }
  let group;
  try {
    group = await gxCert.getGroup(groupId);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_GROUP_IN_SHOW",
    payload: group,
  });
}

const onChangeGroupInSidebar = (evt) => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const state = getState().state;
  const groupIdStr = evt.target.value;
  if (groupIdStr === "new") {
    history.push("/group/new");
    return;
  }
  const groupId = parseInt(groupIdStr);
  const groups = state.groupsInSidebar;
  for (const group of groups) {
    if (group.groupId === groupId) {
      dispatch({
        type: "ON_CHANGE_GROUP_IN_SIDEBAR",
        payload: group,
      });
      dispatch({
        type: "ON_CHANGE_GROUP_NAME_IN_EDIT",
        payload: group.name,
      });
      dispatch({
        type: "ON_CHANGE_GROUP_ADDRESS_IN_EDIT",
        payload: group.residence,
      });
      dispatch({
        type: "ON_CHANGE_GROUP_PHONE_IN_EDIT",
        payload: group.phone,
      });
      console.log(group);
      for (let i = 0; i < group.members.length; i++) {
        getImageOnIpfsOrCache(group.members[i].icon, dispatch, getState).then(imageUrl => {
          group.members[i].imageUrl = imageUrl;
          dispatch({
            type: "ON_CHANGE_GROUP_IN_SIDEBAR",
            payload: group,
          });
        }).catch(err => {
          console.error(err);
        });
      }
      continue;
    }
  }
  fetchCertificatesInIssuer()(dispatch, getState);
}
const fetchGroups = () => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const state = getState().state;
  const address = state.from;
  let groups;
  try {
    groups = await gxCert.getGroups(address);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_GROUPS",
    payload: groups,
  });
}

const signIn = () => async (dispatch) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    alert("Please log with Google");
    return;
  }
  if (!gxCert.address) {
    console.log("Failed to login.");
    return;
  }
  console.log(gxCert.address);
  dispatch({
    type: "LOGGED_IN",
    payload: gxCert.address,
  });
  let profile;
  try {
    profile = await gxCert.getProfile(gxCert.address);
  } catch(err) {
    console.error(err);
    history.push("/profile/new");
    return;
  }

  history.push("/");
}

const fetchGroup = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCHED_GROUP",
    payload: null,
  });
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }
}
const fetchGroupInEdit = (groupId) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_GROUP_ID_IN_EDIT",
    payload: groupId,
  });
  dispatch({
    type: "FETCHED_GROUP_IN_EDIT",
    payload: null,
  });
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }


  const state = getState().state;
  let group;
  try {
    group = await gxCert.getGroup(groupId);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_GROUP_IN_EDIT",
    payload: group,
  });
}
const fetchProfileInShow = (address) => async (dispatch, getState) => {
  dispatch({
    type: "FETCHED_PROFILE_IN_SHOW",
    payload: null,
  });
  let gxCert;
  try {
    gxCert = await getGxCertWithoutLogin();
  } catch(err) {
    console.error(err);
    return;
  }
  let profile;
  try {
    profile = await gxCert.getProfile(address);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_PROFILE_IN_SHOW",
    payload: profile,
  });

  getImageOnIpfsOrCache(profile.icon, dispatch, getState).then(imageUrl => {
    profile.imageUrl = imageUrl;
    dispatch({
      type: "FETCHED_PROFILE_IN_SHOW",
      payload: profile,
    });
  }).catch(err => {
    console.error(err);
  });
  
}
const fetchProfileInEdit = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCHED_PROFILE_IN_EDIT",
    payload: null,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  let profile;
  try {
    profile = await gxCert.getProfile(gxCert.address);
  } catch(err) {
    console.error(err);
    alert("Failed to fetch profile.");
    return;
  }
  dispatch({
    type: "FETCHED_PROFILE_IN_EDIT",
    payload: profile,
  });
  dispatch({
    type: "ON_CHANGE_PROFILE_NAME_IN_EDIT",
    payload: profile.name,
  });
  dispatch({
    type: "ON_CHANGE_PROFILE_EMAIL_IN_EDIT",
    payload: profile.email,
  });

  getImageOnIpfsOrCache(profile.icon, dispatch, getState).then(imageUrl => {
    profile.imageUrl = imageUrl;
    dispatch({
      type: "FETCHED_PROFILE_IN_EDIT",
      payload: profile,
    });
  }).catch(err => {
    console.error(err);
  });
  
}
const fetchCertificatesInIssuer = () => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const state = getState().state;
  const address = gxCert.address;
  let certificates = [];
  const group = state.groupInSidebar;
  const groupId = group.groupId;
  try {
    certificates = await gxCert.getGroupCerts(groupId);
  } catch(err) {
    console.error(err);
    alert("Failed to fetch certificates.");
    return;
  }
  for (let i = 0; i < certificates.length; i++) {
    certificates[i].userCerts = [];
  }
  dispatch({
    type: "FETCHED_CERTIFICATES_IN_ISSUER",
    payload: certificates,
  });
  for (let i = 0; i < certificates.length; i++) {
    const userCerts = await gxCert.getIssuedUserCerts(certificates[i].id);
    certificates[i].userCerts = userCerts;
    dispatch({
      type: "FETCHED_CERTIFICATES_IN_ISSUER",
      payload: certificates,
    });
    getImageOnIpfsOrCache(certificates[i].image, dispatch, getState).then(imageUrl => {
      certificates[i].imageUrl = imageUrl;
      dispatch({
        type: "FETCHED_CERTIFICATES_IN_ISSUER",
        payload: certificates,
      });
    }).catch(err => {
      console.error(err);
    });
    for (let j = 0; j < userCerts.length; j++) {
      let profile;
      try {
        profile = await gxCert.getProfile(userCerts[j].to);
      } catch(err) {
        console.error(err);
        continue;
      }
      certificates[i].userCerts[j].profile = profile;
      getImageOnIpfsOrCache(profile.icon, dispatch, getState).then(imageUrl => {
        profile.imageUrl = imageUrl;
        certificates[i].userCerts[j].profile = profile;
        dispatch({
          type: "FETCHED_CERTIFICATES_IN_ISSUER",
          payload: certificates,
        });
      }).catch(err => {
        console.error(err);
      });

    }
  }
}

const sign = () => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  if (!window.confirm("グループの作成、証明書の発行には、ブロックチェーンへの書き込み手数料がかかります。書き込み手数料は寄付によって賄われています。ご理解・ご協力賜りますようよろしくお願い申し上げます。")) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const state = getState().state;
  const certificates = state.certificatesInIssuer;
  if (state.groupInSidebar === null) {
    alert("Please set group on sidebar.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const image = state.image;
  if (!image) {
    alert("Image not set.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  let imageCid;
  try {
    imageCid = await gxCert.uploadImageToIpfs(image);
  } catch(err) {
    console.error(err);
    alert("Failed to post the image to IPFS.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const certificate = {
    context: {},
    title: state.title,
    description: state.description,
    image: imageCid,
    groupId: state.groupInSidebar.groupId,
  }
  if (!gxCert.isCertificate(certificate)) {
    alert("Invalid Certificate.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  let signed = null;
  try {
    signed = await gxCert.signCertificate(certificate, { address: gxCert.address });
  } catch(err) {
    console.error(err);
    alert("Failed to sign the certificate.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  try {
    await gxCert.createCert(signed);
  } catch(err) {
    console.error(err);
    alert("Failed to post the signed certificate.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  let prevLength = certificates.length;
  await (() => {
    return new Promise((resolve, reject) => {
      const timer = setInterval(async () => {
        await fetchCertificatesInIssuer()(dispatch, getState);
        const state = getState().state;
        if (prevLength < state.certificatesInIssuer.length) {
          clearInterval(timer);
          resolve();
        }
      }, 3000);
    });
  })();
  dispatch({
    type: "LOADING",
    payload: false,
  });

  history.push("/issue");
}

const registerProfile = () => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const state = getState().state;
  const name = state.profileName;
  const email = state.profileEmail;
  const iconImage = state.profileImage;
  const address = state.from;

  let icon;
  try {
    icon = await gxCert.uploadImageToIpfs(iconImage);
  } catch(err) {
    console.error(err);
    alert("Failed to upload image to IPFS."); 
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  let signedProfile;
  try {
    signedProfile = await gxCert.signProfile({
      name,
      email,
      icon,
    }, { 
      address,
    });
  } catch(err) {
    console.error(err);
    alert("Failed to sign profile.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  try {
    await gxCert.createProfile(address, signedProfile);
  } catch(err) {
    console.error(err);
    alert("Failed to register profile.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  dispatch({
    type: "LOADING",
    payload: false,
  });
  history.push("/");

}
const registerGroup = () => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  if (!window.confirm("グループの作成、証明書の発行には、ブロックチェーンへの書き込み手数料がかかります。書き込み手数料は寄付によって賄われています。ご理解・ご協力賜りますようよろしくお願い申し上げます。")) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const state = getState().state;
  const from = state.from;
  const groupName = state.groupName;
  const groupAddress = state.groupAddress;
  const groupPhone = state.groupPhone;
  try {
    await gxCert.createGroup(groupName, groupAddress, groupPhone, from);
  } catch(err) {
    console.error(err);
    alert("Failed to create group.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const prevLength = state.groupsInSidebar.length;
  await (() => {
    return new Promise((resolve, reject) => {
      const timer = setInterval(async () => {
        await fetchGroupsInSidebar()(dispatch, getState);
        const state = getState().state;
        if (prevLength < state.groupsInSidebar.length) {
          clearInterval(timer);
          resolve();
        }
      }, 3000);
    });
  })();
  dispatch({
    type: "LOADING",
    payload: false,
  });
  history.push("/new");
}
const updateProfile = () => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const state = getState().state;
  const name = state.profileNameInEdit;
  const email = state.profileEmailInEdit;
  const image = state.profileImageInEdit;
  let icon;
  if (image === "") {
    if (state.profileInEdit !== null) {
      icon = state.profileInEdit.icon;
    } else {
      icon = "";
    }
  } else {
    icon = await gxCert.uploadImageToIpfs(image);
  }

  const address = gxCert.address;

  const newProfile = {
    name,
    email,
    icon,
  }
  console.log(newProfile);

  const signedProfile = await gxCert.signProfileForUpdating(newProfile, { address });
  try {
    await gxCert.updateProfile(signedProfile);
  } catch(err) {
    console.error(err);
    alert("Failed to update your profile.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  dispatch({
    type: "LOADING",
    payload: false,
  });
  history.push("/");
}
const updateGroup = () => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const state = getState().state;
  if (state.groupInSidebar === null) {
    alert("Please choose group on sidebar.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const groupId = state.groupInSidebar.groupId;
  const name = state.groupNameInEdit;
  const residence = state.groupAddressInEdit;
  const phone = state.groupPhoneInEdit;
  const group = {
    groupId,
    name,
    residence,
    phone,
  }

  const signedGroup = await gxCert.signGroup(group, { address: gxCert.address });
  try {
    await gxCert.updateGroup(signedGroup);
  } catch(err) {
    console.error(err);
    alert("Failed to update group.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  dispatch({
    type: "LOADING",
    payload: false,
  });
  history.push("/");
}
const issue = (certId) => async (dispatch, getState) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  if (!window.confirm("グループの作成、証明書の発行には、ブロックチェーンへの書き込み手数料がかかります。書き込み手数料は寄付によって賄われています。ご理解・ご協力賜りますようよろしくお願い申し上げます。")) {
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const state = getState().state;
  const from = state.from;
  const signerAddress = state.from;
  const toEmail = state.toInIssue;
  let to;
  try {
    to = await torusClient.getPublicAddressByGoogle(toEmail);
  } catch(err) {
    console.error(err);
    alert("Failed to get public address of the Google account.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  const userCert = {
    certId,
    from,
    to,
  }
  console.log(userCert);
  let signed;
  try {
    signed = await gxCert.signUserCertificate(userCert, { address: from });
  } catch(err) {
    console.error(err);
    alert("Failed to sign the certificate.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  try {
    await gxCert.createUserCert(signed);
  } catch(err) {
    console.error(err);
    alert("Failed to issue the certificate.");
    dispatch({
      type: "LOADING",
      payload: false,
    });
    return;
  }
  await wait();
  dispatch({
    type: "LOADING",
    payload: false,
  });
  history.push("/issue");
}
const inviteMember = () => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const state = getState().state;
  const signerAddress = state.from;
  const groupId = state.group.groupId;
  const email = state.groupMemberToInvite;
  let address;
  try {
    address = await torusClient.getPublicAddressByGoogle(email);
  } catch(err) {
    console.error(err);
    alert("Email is not registered.");
    return;
  }
  let signedMember;
  try {
    signedMember = await gxCert.signMemberAddressForInviting(address, { address: signerAddress });
  } catch(err) {
    console.error(err);
    alert("Failed to sign for invitation.");
    return;
  }
  try {
    await gxCert.inviteMemberToGroup(groupId, signedMember);
  } catch(err) {
    console.error(err);
    alert("Failed to send invitation.");
    return;
  }
  let group;
  try {
    group = await gxCert.getGroup(groupId);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_GROUP",
    payload: group,
  });
}

const disableGroupMember = (groupId, address) => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const state = getState().state;
  const signedAddress = await gxCert.signMemberAddressForDisabling(address, { address: gxCert.address });
  try {
    await gxCert.disableGroupMember(groupId, signedAddress);
  } catch(err) {
    console.error(err);
    return;
  }
}

const invalidateUserCert = (userCertId) => async (dispatch, getState) => {
  let gxCert;
  try {
    gxCert = await getGxCert();
  } catch(err) {
    console.error(err);
    return;
  }
  const signedUserCert = await gxCert.signUserCertForInvalidation(userCertId, { address: gxCert.address });
  console.log(signedUserCert);
  try {
    await gxCert.invalidateUserCert(signedUserCert);
  } catch(err) {
    console.error(err);
    return;
  }
  await wait();

  const state = getState().state;
  const address = gxCert.address;
  let groups;
  try {
    groups = await gxCert.getGroups(address);
  } catch(err) {
    console.error(err);
    alert("Failed to fetch your groups");
    return;
  }
  let certificates = [];
  for (const group of groups) {
    const groupId = group.groupId;
    try {
      certificates = certificates.concat(await gxCert.getGroupCerts(groupId));
    } catch(err) {
      console.error(err);
      continue;
    }
  }
  for (let i = 0; i < certificates.length; i++) {
    certificates[i].userCerts = [];
  }
  dispatch({
    type: "FETCHED_CERTIFICATES_IN_ISSUER",
    payload: certificates,
  });
  for (let i = 0; i < certificates.length; i++) {
    const userCerts = await gxCert.getIssuedUserCerts(certificates[i].id);
    certificates[i].userCerts = userCerts;
    dispatch({
      type: "FETCHED_CERTIFICATES_IN_ISSUER",
      payload: certificates,
    });
    for (let j = 0; j < userCerts.length; j++) {
      const profile = await gxCert.getProfile(userCerts[j].to);
      certificates[i].userCerts[j].profile = profile;
    }
    getImageOnIpfsOrCache(certificates[i].image, dispatch, getState).then(imageUrl => {
      certificates[i].imageUrl = imageUrl;
      dispatch({
        type: "FETCHED_CERTIFICATES_IN_ISSUER",
        payload: certificates,
      });
    }).catch(err => {
      console.error(err);
    });
  }
}

const signOut = () => async (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
    payload: null,
  });
  history.push("/top");
}
export {
  onChangeTitle,
  onChangeDescription,
  onChangeImage,
  onChangeGroup,
  onChangeGroupName,
  onChangeGroupAddress,
  onChangeGroupPhone,
  onChangeGroupNameInEdit,
  onChangeGroupAddressInEdit,
  onChangeGroupPhoneInEdit,
  onChangeProfileName,
  onChangeProfileEmail,
  onChangeProfileImage,
  onChangeProfileNameInEdit,
  onChangeProfileEmailInEdit,
  onChangeProfileImageInEdit,
  onChangeToInIssue,
  onChangeGroupMemberToInvite,
  onChangeGroupInSidebar,
  sign,
  signIn,
  fetchProfileInEdit,
  fetchProfileInShow,
  fetchCertificate,
  fetchCertificateInIssue,
  fetchCertificates,
  fetchGroups,
  fetchGroupsInSidebar,
  fetchGroup,
  fetchGroupInShow,
  fetchGroupInEdit,
  fetchCertificatesInIssuer,
  registerGroup,
  registerProfile,
  inviteMember,
  issue,
  updateGroup,
  updateProfile,
  disableGroupMember,
  invalidateUserCert,
  signOut,

};
