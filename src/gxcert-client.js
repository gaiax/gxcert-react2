import GxCertClient from "gxcert-lib";

let gxCert = null;
function getGxCert(web3) {
  if (gxCert === null && web3) {
    gxCert = new GxCertClient(web3, "0xB50267Ee91f214160c35Bf1aFCb5D9D520D76322", "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert");
  }
  return gxCert;
}

export default getGxCert;
