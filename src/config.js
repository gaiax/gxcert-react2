
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xFC5eE41B4defa960d1823DABa8433bbdf6254392",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xFC5eE41B4defa960d1823DABa8433bbdf6254392",
    gxApi: "https://asia-northeast1-gxcert-21233.cloudfunctions.net/gxcert",
  }
}


export default config;
