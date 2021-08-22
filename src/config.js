
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xB16070e105567515FCA925eD621229DDc75815B7",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xB16070e105567515FCA925eD621229DDc75815B7",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  }
}


export default config;
