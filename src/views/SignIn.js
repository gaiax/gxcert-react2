
function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in-content">
        <p className="sign-in-message">サービスの利用にはGoogleアカウントでの認証が必須です。Googleアカウントで認証を行った後、登録を完了させてください。</p>
        <img src="/google.png" />
      </div>
    </div>
  );
}

export default SignIn;
