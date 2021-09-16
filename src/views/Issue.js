import React from "react";

class Issue extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.certId = parseInt(this.props.match.params.certId);
    this.props.fetchCertificate(this.certId);
  }
  render() {
    const tos = [];
    for (let i = 0; i < this.props.toCountInIssue; i++) {
      tos.push(<input type="text" className="issue-form-to" onChange={this.props.onChangeToInIssue}/>);
    }
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
            <p className="issue-form-title">発行先メールアドレス</p>
            <div className="issue-form">
              { tos }
              <button className="issue-form-add-to" onClick={this.props.addTo}>追加</button>
              <button className="issue-form-issue" onClick={ () => { this.props.issue(this.certId)}}>発行</button>
            </div>
          </div>
        ) }
      </div>
    );
  }
}

export default Issue;
