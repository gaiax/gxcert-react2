import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import Sidebar from "./Sidebar";

class GroupMembers extends React.Component {

  constructor() {
    super();
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="group-members">
        <Sidebar
          onChangeGroupInSidebar={this.props.onChangeGroupInSidebar}
          groupInSidebar={this.props.groupInSidebar}
          groupsInSidebar={this.props.groupsInSidebar}
          fetchGroupsInSidebar={this.props.fetchGroupsInSidebar}
        />
        <div className="group-members-content">
          { (() => {
            const that = this;
            if (!this.props.groupInSidebar) {
              return (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} /> 
              );
            }
            return (
              <div>
                <p className="group-members-title">{ this.props.groupInSidebar.name }のメンバー</p>
                <input type="text" className="group-members-invite" onChange={this.props.onChangeGroupMemberToInvite} />
                <button className="group-members-invite-button" onClick={this.props.inviteMember} >招待</button>
                <div className="group-members-list">
                  { this.props.groupInSidebar.members.map(member => {
                    return (
                      <div className="group-members-list-cell">
                        <img src={member.imageUrl} className="group-members-list-cell-icon"/>
                        <div className="group-members-list-cell-detail">
                          <p className="group-members-list-cell-name">
                            {member.name} 
                          </p>
                          <p className="group-members-list-cell-address">
                            {member.address}
                          </p>
                        </div>
                        <div className="group-members-list-cell-disable" onClick={() => that.props.disableGroupMember(that.props.groupInSidebar.groupId, member.address) }>削除</div>
                      </div>
                    );
                  }) }
                </div>
              </div>
            );
          })() }
        </div>
      </div>
    );
  }
}

export default GroupMembers;
