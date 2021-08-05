import torusClient from "../torus";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <p className="sign-in-message">サービスの利用にはGoogleアカウントでの認証が必須です。Googleアカウントで認証を行った後、登録を完了させてください。</p>
        <img src="/google.png" onClick={(async () => {
          await torusClient.init();
          await torusClient.login();
        }) }/>
      </div>
    </div>
  );
}

export default SignIn;
