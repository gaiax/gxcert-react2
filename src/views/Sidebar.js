import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchGroupsInSidebar();
  }
  render() {
    return (
      <div className="sidebar">
          <p className="sidebar-title">証明書発行</p>
          <select className="sidebar-group" onFocus={this.props.fetchGroupsInSidebar} onChange={this.props.onChangeGroupInSidebar} defaultValue={ this.props.groupInSidebar ? this.props.groupInSidebar.groupId.toString() : ""}>
            <option hidden>発行元を選択</option>
            { this.props.groupsInSidebar ? this.props.groupsInSidebar.map(group => {
              return (
                <option value={group.groupId.toString()}>{group.name}</option>
              )
            }) : "" }
            <option value="new">発行元の登録</option>
          </select>
        <ul>
          <li><Link to="/issue">証明書</Link></li>
          <li><Link to="/group">メンバー設定</Link></li>
          <li><Link to="/group/edit/">発行元設定</Link></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
