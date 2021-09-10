import React from "react";
import { Link } from "react-router-dom";

class EditGroup extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const groupId = parseInt(this.props.match.params.groupId);
    this.props.fetchGroup(groupId);
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
            <li><Link to={ this.props.groupInSidebar !== null ? "/group/edit/" + this.props.groupInSidebar.groupId.toString() : "#" }>ISSUER</Link></li>
          </ul>
        </div>
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

            <div className="register-button" onClick={this.props.updateGroup} >
              更新
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditGroup;
