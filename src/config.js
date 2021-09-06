
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xc5fF867995497133cce2567FDB98577d8797bedD",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0xc5fF867995497133cce2567FDB98577d8797bedD",
    gxApi: "https://asia-northeast1-gxcert-21233.cloudfunctions.net/gxcert",
  }
}


export default config;
