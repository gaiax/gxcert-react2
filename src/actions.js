import getGxCert from "./gxcert-client";

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

const sign = () => async (dispatch, getState) => {
  const gxCert = getGxCert();
  console.log(gxCert);
  const state = getState().state;
  const image = state.image;
  console.log(image);
  if (!image) {
    return;
  }
  const imageCid = await gxCert.uploadImageToIpfs(image);
  const certificate = {
    context: {},
    title: state.title,
    description: state.description,
    from: state.from,
    to: state.to,
    issued_at: (new Date()).getTime(),
    url: state.url,
    image: imageCid,
  }
  console.log(certificate);
  if (!gxCert.isCertificate(certificate)) {
    return;
  }
  console.log(gxCert.web3.eth.accounts[0]);
  let signed = null;
  try {
    signed = await gxCert.signCertificate(gxCert.web3.eth.accounts[0].privateKey, certificate);
  } catch(err) {
    console.error(err);
    return;
  }
  console.log(signed);

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
};
