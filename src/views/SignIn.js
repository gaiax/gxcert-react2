import torusClient from "../torus";
import { getGxCert } from "../gxcert-client";

function SignIn(props) {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <p className="sign-in-message">サービスの利用にはGoogleアカウントでの認証が必須です。Googleアカウントで認証を行った後、登録を完了させてください。</p>
        <img src="/google.png" onClick={props.signIn}/>
      </div>
    </div>
  );
}

export default SignIn;
