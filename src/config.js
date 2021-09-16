
let config;
if (process.env.NODE_ENV === "development") {
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x38c009E363f7AcAEf5a29674192EF5edBe8cFE3f",
    gxApi: "http://localhost:5001/gxcert-21233/asia-northeast1/gxcert",
    host: "http://localhost:3000/gxcert-react2#",
  };
} else if (process.env.NODE_ENV === "production") {
  //TODO: Change here
  config = {
    web3Host: "https://matic-mumbai.chainstacklabs.com",
    contractAddress: "0x38c009E363f7AcAEf5a29674192EF5edBe8cFE3f",
    gxApi: "https://asia-northeast1-gxcert-21233.cloudfunctions.net/gxcert",
    host: "https://gaiax.github.io/gxcert-react2/#",
  }
}


export default config;
