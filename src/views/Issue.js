import React from "react";

class Issue extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchCertificates();
  }
  render() {
    return (
      <div className="issue">
        <div className="issue-certificates">
          <button className="issue-certificates-new">新規作成</button>
          <br/>
          <p className="issue-certificates-title">証明書</p>
          <div className="issue-certificates-list">
            {
              this.props.certificates.map(certificate => {
                return (
                  <div className="issue-certificates-list-cell">
                    <img src={certificate.imageUrl} className="issue-certificates-list-cell-icon"/>
                    <p className="issue-certificates-list-cell-title">
                      {certificate.title} 
                    </p>
                    <div className="issue-certificates-list-cell-issue">発行</div>
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
