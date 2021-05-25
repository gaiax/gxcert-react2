
function Registration() {
  return (
    <div className="registration">
      <div className="registration-content">
        <p className="registration-title">ユーザー登録</p>
        <img src="" className="registration-icon" />
        <div className="registration-form">
          <p className="registration-form-title">Name</p>
          <input type="text" className="registration-form-name" />
          <p className="registration-form-title">E-mail</p>
          <input type="text" className="registration-form-email" />
        </div>
        <div className="register-button">
          登録
        </div>
      </div>
    </div>
  );
}

export default Registration;
