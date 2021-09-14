import signInImage from "../images/btn_google_signin_dark_normal_web@2x@2x.png";

function SignIn(props) {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <p className="sign-in-message">サービスの利用にはGoogleアカウントでの認証が必須です。Googleアカウントで認証を行った後、登録を完了させてください。</p>
        <img src={signInImage} onClick={props.signIn} className="sign-in-image" />
      </div>
    </div>
  );
}

export default SignIn;
