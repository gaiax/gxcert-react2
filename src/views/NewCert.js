
function NewCert() {
  return (
    <div className="new-cert">
      <div className="new-cert-content">
        <p className="new-cert-title">
          証明書の登録 
        </p>
        <p className="new-cert-description">
          証明書を登録してください。証明書は複数登録することができ、それぞれの複数のユーザーに対して発行することができます。
        </p>

        <div className="new-cert-form">
          <p className="new-cert-form-title">
            Name of Certificate
          </p>
          <input type="text" className="new-cert-form-name" />
          <p className="new-cert-form-title">
            Description of Certificate
          </p>
          <textarea className="new-cert-form-description"></textarea>
          <p className="new-cert-form-title">
            Certificate Image
          </p>
          <img src="" className="new-cert-form-image" />
          <div className="new-cert-form-image-file-div">
            IMAGE_99312.jpg
            <label className="new-cert-form-image-file-label">
              <input type="file" className="new-cert-form-image-file" />
              画像選択
            </label>
          </div>
          <div className="register-button">
            登録
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCert;
