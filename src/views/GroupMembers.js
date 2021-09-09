import React from "react";
import { Link } from "react-router-dom";

class GroupMembers extends React.Component {

  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchGroup(parseInt(this.props.match.params.id));
  }

  render() {
    return (
      <div className="group-members">
        <div className="sidebar">
          <ul>
            <li className="sidebar-title">ISSUE</li>
            <li><Link to="/issue">CERTIFICATE</Link></li>
            <li>MEMBERS</li>
            <li>PUBLISHER</li>
          </ul>
        </div>
        <div className="group-members-content">
          { (() => {
            const that = this;
            if (!this.props.group) {
              return (
                <p>Group not found.</p>
              );
            }
            return (
              <div>
                <p className="group-members-title">{ this.props.group.name }のメンバー</p>
                <input type="text" className="group-members-invite" onChange={this.props.onChangeGroupMemberToInvite} />
                <button className="group-members-invite-button" onClick={this.props.inviteMember} >Invite</button>
                <div className="group-members-list">
                  { this.props.group.members.map(member => {
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
                        <div className="group-members-list-cell-disable" onClick={() => that.props.disableGroupMember(that.props.group.groupId, member.address) }>無効化</div>
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
