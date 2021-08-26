
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x14B7c79b358Dd04c6c2E11a019FB84Ec3913a407",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x14B7c79b358Dd04c6c2E11a019FB84Ec3913a407",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  }
}


export default config;
