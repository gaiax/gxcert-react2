import React from "react";

class Issue extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const certId = parseInt(this.props.match.params.certId);
    this.props.fetchGroupInIssue(certId);
  }
  render() {
    
  }
}
