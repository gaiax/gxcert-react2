import React from "react";
import Loader from "react-loader-spinner";
class Group extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const groupId = parseInt(this.props.match.params.groupId);
    this.props.fetchGroup(groupId);
  }

  render() {
    return (
      <div className="group">
        { this.props.group ? (
          <div className="group-content">
            <p className="group-title">{ this.props.group.name }</p>
            <table className="group-detail">
              <tr>
                <td>電話番号</td>
                <td>{this.props.group.phone}</td>
              </tr>
              <tr>
                <td>住所</td>
                <td>{this.props.group.residence}</td>
              </tr>
            </table>
          </div>
        ) : <Loader type="Puff" color="#00BFFF" height={100} width={100} /> }
      </div>
    );
  }
}

export default Group;
