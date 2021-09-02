import React from "react";

class Issue extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const groupId = parseInt(this.props.match.params.groupId);
    this.props.fetchGroup(groupId);
  }
  render() {
    return (
      <div className="issue">
        <div className="issue-certificates">
          <button className="issue-certificates-new">新規作成</button>
          <p className="issue-certificates-title">{this.props.group ? this.props.group.name : ""}の証明書</p>
          <div className="issue-certificates-list">
            {
              this.props.certificates.map(certificate => {
                return (
                  <div className="issue-certificates-list-cell">
                    <img src={certificate.imageUrl} className="certificates-list-cell-icon"/>
                    <div className="certificates-list-cell-detail">
                      <p className="certificates-list-cell-title">
                        {certificate.title} 
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Issue;
