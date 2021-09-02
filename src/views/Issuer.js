import React from "react";
import { Link } from "react-router-dom";

class Issuer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchCertificates();
  }
  render() {
    return (
      <div className="issuer">
        <div className="issuer-certificates">
          <Link to="/new">
            <div className="issuer-certificates-new">新規作成</div>
          </Link>
          <br/>
          <p className="issuer-certificates-title">証明書</p>
          <div className="issuer-certificates-list">
            {
              this.props.certificates.map(certificate => {
                return (
                  <div className="issuer-certificates-list-cell">
                    <img src={certificate.imageUrl} className="issuer-certificates-list-cell-icon"/>
                    <p className="issuer-certificates-list-cell-title">
                      {certificate.title} 
                    </p>
                    <Link to={"/issue/" + certificate.id}>
                      <div className="issuer-certificates-list-cell-issue">発行</div>
                    </Link>
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

export default Issuer;
