import getGxCert from "./gxcert-client";
import { getImageOnIpfs } from "./util/ipfs";

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
const onChangeUrl = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_URL",
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
const onChangeFrom = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_FROM",
    payload: evt.target.value,
  });
}
const onChangeTo = (evt) => async (dispatch, getState) => {
  dispatch({
    type: "ON_CHANGE_TO",
    payload: evt.target.value,
  });
}

const loggedIn = (address) => async (dispatch) => {
  dispatch({
    type: "LOGGED_IN",
    payload: address
  });
}

const fetchCertificateImage = (cid) => async (dispatch) => {
  let imageUrl;
  try {
    imageUrl = await getImageOnIpfs(cid);
  } catch(err) {
    console.error(err);
    return;
  }
  dispatch({
    type: "FETCHED_CERTIFICATE_IMAGE",
    payload: imageUrl,
  });
}

const sign = () => async (dispatch, getState) => {
  const gxCert = getGxCert();
  console.log(gxCert);
  const state = getState().state;
  const image = state.image;
  console.log(image);
  if (!image) {
    alert("Image not set.");
    return;
  }
  let imageCid;
  try {
    imageCid = await gxCert.uploadImageToIpfs(image);
  } catch(err) {
    console.error(err);
    alert("Failed to post the image to IPFS.");
    return;
  }
  const accounts = await gxCert.web3.eth.getAccounts();
  const certificate = {
    context: {},
    title: state.title,
    description: state.description,
    from: accounts[0],
    to: state.to,
    issued_at: (new Date()).getTime(),
    url: state.url,
    image: imageCid,
  }
  console.log(certificate);
  if (!gxCert.isCertificate(certificate)) {
    alert("Invalid Certificate.");
    return;
  }
  let signed = null;
  try {
    signed = await gxCert.signCertificate(certificate);
  } catch(err) {
    console.error(err);
    alert("Failed to sign the certificate.");
    return;
  }
  try {
    await gxCert.sendSignedCertificateToGx(signed);
  } catch(err) {
    console.error(err);
    alert("Failed to post the signed certificate.");
    return;
  }

  dispatch({
    type: "SIGN",
    payload: null,
  });
}
export {
  onChangeTitle,
  onChangeDescription,
  onChangeImage,
  onChangeUrl,
  onChangeFrom,
  onChangeTo,
  sign,
  loggedIn,
};
