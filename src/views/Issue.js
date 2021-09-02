import React from "react";

class Issue extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const certId = parseInt(this.props.match.params.certId);
    this.props.fetchCertificate(certId);
  }
  render() {
    return (
      <div className="issue">
        { !this.props.certificate ? (
          <div className="issue-content">
            <p className="certificate-not-found">Certificate not found.</p> 
          </div>
        ) : (
          <div className="issue-content">
            <p className="issue-title">
              {this.props.certificate.title}の発行
            </p>
            <p className="issue-form-title">Add Address</p>
            <div className="issue-form">
              <input type="text" className="issue-form-to" onChange={this.props.onChangeToInIssue}/>
              <button className="issue-form-issue">発行</button>
            </div>
            
          </div>
        ) }
      </div>
    );
  }
}

export default Issue;
