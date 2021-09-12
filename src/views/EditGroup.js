import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

class EditGroup extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }
  render() {
    console.log(this.props.groupInSidebar);
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
            <li><Link to="/group">MEMBERS</Link></li>
            <li><Link to="/group/edit/">ISSUER</Link></li>
          </ul>
        </div>
        { this.props.groupInSidebar !== null ? (
        <div className="edit-group-content">
          <p className="edit-group-title">発行元 {this.props.groupInSidebar.name}の更新</p>
          <p className="edit-group-description">証明書の発行には発行元となる団体（企業、教育機関、NPO法人など）の登録が必要です。</p>
          <div className="edit-group-form">
            <p className="edit-group-form-title">Name</p>
            <input type="text" className="edit-group-form-name" onChange={this.props.onChangeGroupName} defaultValue={this.props.groupInSidebar.name} />
            <p className="edit-group-form-title">Address</p>
            <input type="text" className="edit-group-form-address" onChange={this.props.onChangeGroupAddress} defaultValue={this.props.groupInSidebar.residence}/>
            <p className="edit-group-form-title">Phone</p>
            <input type="text" className="edit-group-form-phone" onChange={this.props.onChangeGroupPhone} defaultValue={this.props.groupInSidebar.phone} />

            <div className="register-button" onClick={this.props.updateGroup} >
              更新
            </div>
          </div>
        </div>) : ( <div className="edit-group-content">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        </div>) }
      </div>
    );
  }
}

export default EditGroup;
