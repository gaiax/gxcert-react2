import React from "react";

class GroupMembers extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="group-members">
        <div className="group-members-content">
          <p className="group-members-title">{ this.props.group.name }のメンバー</p>
          <div className="group-members-list">
            { this.props.group.members.map(member => {
              return (
                <div className="group-members-list-cell">
                  <img src={member.imageUrl} className="group-members-list-cell-icon"/>
                  <div className="group-members-list-cell-detail">
                    <p className="group-members-list-cell-name">
                      {member.name} 
                    </p>
                    <p className="group-members-list-cell-by">
                      {member.address}
                    </p>
                  </div>
                </div>
              );
            }) }
          </div>
        </div>
      </div>
    );
  }
}
