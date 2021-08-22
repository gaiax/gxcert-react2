
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x4F09E3a387aF774FB9815850b893D44781563904",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x4F09E3a387aF774FB9815850b893D44781563904",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  }
}


export default config;
