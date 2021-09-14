import GxCertClient from "gxcert-lib";
import Web3 from "web3";
import torusClient from "./torus";

import config from "./config";


let gxCertWithoutLogin = new GxCertClient(new Web3(config.web3Host), config.contractAddress);
let gxCert;

async function getGxCertWithoutLogin() {
  if (!gxCertWithoutLogin.isInitialized()) {
    await gxCertWithoutLogin.init();
  }
  return gxCertWithoutLogin;
}
async function getGxCert() {
  let web3;
  try {
    await torusClient.init();
  } catch(err) {
    console.error(err);
  }
  try {
    web3 = await torusClient.login();
  } catch(err) {
    console.error(err);
    throw new Error("Please log in using torus.");
  }
  console.log(web3);
  if (web3) {
    try {
      gxCert = new GxCertClient(web3, config.contractAddress, config.gxApi);
      await gxCert.init();
    } catch(err) {
      console.error(err);
      throw new Error("gxCert is not initialized.");
    }
  }
  if (!gxCert) {
    throw new Error("gxCert is not initialized.");
  }
  if (!gxCert.address) {
    await gxCert.getMyAddress();
  }
  return gxCert;
}

export {
  getGxCert,
  getGxCertWithoutLogin,
};
