import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

class Certificates extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchCertificates();
  }
  render() {
    return (
      <div className="certificates">
        <div className="certificates-content">
          <p className="certificates-title">
            証明書
          </p>
          <div className="certificates-list">
            { this.props.userCerts === null || this.props.userCerts.length === 0 ? <p className="certificate-not-found">Certificate not found.</p> : "" }
            { this.props.userCerts !== null ? this.props.userCerts.map((userCert, index) => {
              return (
                <Link to={"/certs/" + userCert.userCertId}>
                  <div className="certificates-list-cell">
                    <img src={userCert.certificate.imageUrl} className="certificates-list-cell-icon"/>
                    <div className="certificates-list-cell-detail">
                      <p className="certificates-list-cell-title">
                        {userCert.certificate.title} 
                      </p>
                      <p className="certificates-list-cell-date">
                        { userCert.certificate.timestamp ? (new Date(userCert.certificate.timestamp)).toISOString() : "" }
                      </p>
                      <p className="certificates-list-cell-by">
                        { userCert.certificate.from}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }) : <Loader type="Puff" color="#00BFFF" height={100} width={100} /> }
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
