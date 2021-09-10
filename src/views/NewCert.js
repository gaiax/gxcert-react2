import React from "react";
import { createImageUrlFromUint8Array } from "../util/ipfs";
import { Link } from "react-router-dom";

class NewCert extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchGroupsInSidebar();
  }
  render() {
    let imageUrl = "";
    try {
      imageUrl = createImageUrlFromUint8Array(this.props.image);
    } catch(err) {
      console.error(err);
    }
    return (
      <div className="new-cert">
        <div className="sidebar">
            <p className="sidebar-title">ISSUE</p>
            <select className="sidebar-group" onChange={this.props.onChangeGroupInSidebar} defaultValue={ this.props.groupInSidebar !== null ? this.props.groupInSidebar.groupId.toString() : ""}>
              <option hidden>Choose group</option>
              { this.props.groupsInSidebar !== null ? this.props.groupsInSidebar.map(group => {
                return (
                  <option value={group.groupId.toString()}>{group.name}</option>
                )
              }) : "" }
              <option value="new">Create new group</option>
            </select>
          <ul>
            <li><Link to="/issue">CERTIFICATE</Link></li>
            <li><Link to={ this.props.groupInSidebar !== null ? "/group/" + this.props.groupInSidebar.groupId.toString() : "#"} >MEMBERS</Link></li>
            <li><Link to={ this.props.groupInSidebar !== null ? "/group/edit/" + this.props.groupInSidebar.groupId.toString() : "#" }>PUBLISHER</Link></li>
          </ul>
        </div>
        <div className="new-cert-content">
          <p className="new-cert-title">
            証明書の登録 
          </p>
          <p className="new-cert-description">
            証明書を登録してください。証明書は複数登録することができ、それぞれの複数のユーザーに対して発行することができます。
          </p>
          <div className="new-cert-form">
            <p className="new-cert-form-title">
              Title of Certificate
            </p>
            <input type="text" className="new-cert-form-name" onChange={this.props.onChangeTitle}/>
            <p className="new-cert-form-title">
              Description of Certificate
            </p>
            <textarea className="new-cert-form-description" onChange={this.props.onChangeDescription} ></textarea>
            <p className="new-cert-form-title">
              Certificate Image
            </p>
            <img src={imageUrl} className="new-cert-form-image" />
            <div className="new-cert-form-image-file-div">
              <label className="new-cert-form-image-file-label">
                <input type="file" className="new-cert-form-image-file" onChange={this.props.onChangeImage} />
                画像選択
              </label>
            </div>
            <div className="register-button" onClick={() => this.props.sign()} >
              登録
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCert;
