import React from "react";
import { getImageOnIpfs } from "../util/ipfs";
import { createImageUrlFromUint8Array } from "../util/ipfs";

class EditProfile extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    let imageUrl = null;
    let initialImageUrl = null;
    if (this.props.profile !== null) {
      initialImageUrl = this.props.profile.imageUrl;
    }
    if (this.props.image) {
      try {
        imageUrl = createImageUrlFromUint8Array(this.props.image);
      } catch(err) {
        console.error(err);
      }
    }
    console.log(imageUrl);
    return (
      <div className="edit-profile">
        <div className="edit-profile-content">
          <p className="edit-profile-title">
            プロフィール編集
          </p>
          <div className="edit-profile-form">
            <div className="edit-profile-form-image">
              <label for="edit-profile-form-image-file">
                <img src={imageUrl === null ? initialImageUrl : imageUrl} className="edit-profile-form-image" />
              </label>
              <input id="edit-profile-form-image-file" type="file" onChange={this.props.onChangeProfileImage} />
            </div>
            <p className="edit-profile-form-title">Name</p>
            <input type="text" className="edit-profile-form-name" onChange={this.props.onChangeProfileName} defaultValue={this.props.profile !== null ? this.props.profile.name : ""} />
            <p className="edit-profile-form-title">E-mail</p>
            <input type="text" className="edit-profile-form-email" onChange={this.props.onChangeProfileEmail} defaultValue={this.props.profile !== null ? this.props.profile.email : ""} />
            <div className="register-button" onClick={this.props.updateProfile} >
              更新
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
