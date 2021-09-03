
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x9080783f02E9c6f87fc16Dd9f068CEd729561d4c",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x9080783f02E9c6f87fc16Dd9f068CEd729561d4c",
    gxApi: "https://asia-northeast1-gxcert-21233.cloudfunctions.net/gxcert",
  }
}


export default config;
