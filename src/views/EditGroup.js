import React from "react";

class EditGroup extends React.Component {
  constructor() {
    super();
  }

  render() {
    if (!this.props.group) {
      return (
        <div className="edit-group">
        </div>
      );
    }
    return (
      <div className="edit-group">
        <div className="edit-group-content">
          <p className="edit-group-title">発行元 {this.props.group.name}の更新</p>
          <p className="edit-group-description">証明書の発行には発行元となる団体（企業、教育機関、NPO法人など）の登録が必要です。</p>
          <div className="edit-group-form">
            <p className="edit-group-form-title">Name</p>
            <input type="text" className="edit-group-form-name" onChange={this.props.onChangeGroupName} />
            <p className="edit-group-form-title">Address</p>
            <input type="text" className="edit-group-form-address" onChange={this.props.onChangeGroupAddress} />
            <p className="edit-group-form-title">Phone</p>
            <input type="text" className="edit-group-form-phone" onChange={this.props.onChangeGroupPhone} />

            <div className="register-button" onClick={this.props.registerGroup} >
              更新
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditGroup;
