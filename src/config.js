
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x148d5A48945f78e47C283580a127bF6F85497B57",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xF9322C8f678244e5391B1B6c7aB32E1d5d3857A3",
    gxApi: "https://asia-northeast1-gxcert-21233.cloudfunctions.net/gxcert",
  }
}


export default config;
