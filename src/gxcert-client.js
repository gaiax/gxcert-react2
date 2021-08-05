import GxCertClient from "gxcert-lib";

let gxCert = null;
function getGxCert(web3) {
  if (gxCert === null && web3) {
    gxCert = new GxCertClient(web3);
  }
  return gxCert;
}

export default getGxCert;
