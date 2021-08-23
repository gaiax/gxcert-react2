import React from "react";

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
            { this.props.certificates.length === 0 ? <p className="certificate-not-found">Certificate not found.</p> : "" }
            { this.props.certificates.map((certificate, index) => {
              return (
                <div className="certificates-list-cell">
                  <img src={certificate.imageUrl} className="certificates-list-cell-icon"/>
                  <div className="certificates-list-cell-detail">
                    <p className="certificates-list-cell-title">
                      {certificate.title} 
                    </p>
                    <p className="certificates-list-cell-date">
                      { certificate.issued_at ? (new Date(certificate.issued_at)).toISOString() : "" }
                    </p>
                    <p className="certificates-list-cell-by">
                      {certificate.from}
                    </p>
                  </div>
                </div>
              );
            }) }
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
