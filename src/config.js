
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xddcFaf6fF9232058D1E2A759008cfdC2d057C6c2",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xddcFaf6fF9232058D1E2A759008cfdC2d057C6c2",
    gxApi: "https://asia-northeast1-gxcert-21233.cloudfunctions.net/gxcert",
  }
}


export default config;
