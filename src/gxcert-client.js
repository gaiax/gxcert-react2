import GxCertClient from "gxcert-lib";
import Web3 from "web3";

import config from "./config";


let gxCert = null;
let gxCertWithoutLogin = new GxCertClient(new Web3(config.web3Host), config.contractAddress);

async function getGxCertWithoutLogin() {
  if (!gxCertWithoutLogin.isInitialized()) {
    await gxCertWithoutLogin.init();
  }
  return gxCertWithoutLogin;
}
function getGxCert(web3) {
  if (gxCert === null && web3) {
    gxCert = new GxCertClient(web3, config.contractAddress, config.gxApi);
  }
  if (gxCert === null) {
    throw new Error("gxCert is not initialized.");
  }
  return gxCert;
}

export {
  getGxCert,
  getGxCertWithoutLogin,
};
