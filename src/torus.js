import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";

class TorusClient {
  constructor() {
    this.torus = new Torus();
  }
  async init() {
    await this.torus.init({
      buildEnv: "production",
      enableLogging: true,
      network: {
        host: "https://matic-mumbai.chainstacklabs.com",
        chainId: 80001,
        networkName: "Mumbai Testnet"
      },
      showTorusButton: true,
      enabledVerifiers: {
        google: true,
        facebook:false,
        reddit: false,
        twitch: false,
        discord: false,
      }
    });
    /*
    await this.torus.init({
      buildEnv: "production",
      enableLogging: true,
      network: {
        host: "http://localhost:7545",
        chainId: 80001,
        networkName: "localhost:7545"
      },
      showTorusButton: true,
    });
    */
  }
  async login() {
    const response = await this.torus.login();
    console.log(response);
    console.log(this.torus);
    this.web3 = new Web3(this.torus.provider);
    console.log(this.web3);
    return this.web3;
  }
  async getPublicAddressByGoogle(gmail) {
    return await this.torus.getPublicAddress({
      verifier: "google",
      verifierId: gmail,
    });
  }
}

const torusClient = new TorusClient();
export default torusClient;
