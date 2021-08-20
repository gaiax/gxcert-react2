import torusClient from "../torus";
import getGxCert from "../gxcert-client";

function SignIn(props) {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <p className="sign-in-message">サービスの利用にはGoogleアカウントでの認証が必須です。Googleアカウントで認証を行った後、登録を完了させてください。</p>
        <img src="/google.png" onClick={(async () => {
          await torusClient.init();
          const web3 = await torusClient.login();
          const gxCert = getGxCert(web3, "0xB50267Ee91f214160c35Bf1aFCb5D9D520D76322" );
          await gxCert.init();
          const accounts = await gxCert.web3.eth.getAccounts();
          if (accounts.length === 0) {
            console.log("Failed to login.");
            return;
          }
          props.loggedIn(accounts[0]);
          props.history.push("/new");

        }) }/>
      </div>
    </div>
  );
}

export default SignIn;
