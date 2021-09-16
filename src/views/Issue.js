import React from "react";
import ListInput from "./ListInput";

class Issue extends React.Component {
  constructor() {
    super();
    this.listRef = React.createRef();
  }
  componentDidMount() {
    this.certId = parseInt(this.props.match.params.certId);
    this.props.fetchCertificate(this.certId);
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
            <p className="issue-form-title">発行先メールアドレス</p>
            <div className="issue-form">
              <ListInput ref={this.listRef} count={this.props.toCountInIssue}  onChange={this.props.onChangeToList} addTo={this.props.addTo} />
              <button className="issue-form-issue" onClick={ () => { this.props.issue(this.certId)}}>発行</button>
            </div>
          </div>
        ) }
      </div>
    );
  }
}

export default Issue;
