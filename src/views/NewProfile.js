import React from "react";
import { createImageUrlFromUint8Array } from "../util/ipfs";

class NewProfile extends React.Component {
  constructor() {
    super();
  }
  render() {
    let imageUrl = "";
    try {
      imageUrl = createImageUrlFromUint8Array(this.props.image);
    } catch(err) {
      console.error(err);
    }
    return (
      <div className="new-profile">
        <div className="new-profile-content">
          <p className="new-profile-title">
            ユーザー登録
          </p>
          <div className="new-profile-form">
            <div className="new-profile-form-image">
              <label for="new-profile-form-image-file">
                <img src={imageUrl} className="new-profile-form-image" />
              </label>
              <input id="new-profile-form-image-file" type="file" onChange={this.props.onChangeProfileImage} />
            </div>
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
