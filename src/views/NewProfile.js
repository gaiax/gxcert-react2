import React from "react";

class NewProfile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="new-profile">
        <div className="new-profile-content">
          <p className="new-profile-title">
            ユーザー登録
          </p>
          <div className="new-profile-form">
            <img src={this.props.imageUrl} className="new-profile-form-image" />
            <p className="new-profile-form-title">Name</p>
            <input type="text" className="new-profile-form-name" onChange={this.props.onChangeProfileName} />
            <p className="new-profile-form-title">E-mail</p>
            <input type="text" className="new-profile-form-email" onChange={this.props.onChangeProfileEmail} />
            <div className="register-button" onClick={this.props.registerProfile} >
              登録
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProfile;
