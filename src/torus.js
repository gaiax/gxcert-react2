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
        host: "http://localhost:7545",
        chainId: 80001,
        networkName: "localhost:7545"
      },
      showTorusButton: true,
    });
  }
  async login() {
    await this.torus.login();
    this.web3 = new Web3(this.torus.provider);
    return this.web3;
  }
}

const torusClient = new TorusClient();
export default torusClient;
