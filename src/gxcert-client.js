import GxCertClient from "gxcert-lib";

let gxCert = null;
function getGxCert(web3) {
  if (gxCert === null && web3) {
    gxCert = new GxCertClient(web3, "0x4F09E3a387aF774FB9815850b893D44781563904", "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert");
  }
  if (gxCert === null) {
    throw new Error("gxCert is not initialized.");
  }
  return gxCert;
}

export default getGxCert;
