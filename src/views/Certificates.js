import { Link } from "react-router-dom";

function Certificates(props) {
  return (
    <div className="certificates">
      <div className="certificates-content">
        <p className="certificates-title">
          証明書
        </p>
        <div className="certificates-list">
          { props.certificates.length === 0 ? <p className="certificate-not-found">Certificate not found.</p> : "" }
          { props.certificates.map((certificate, index) => {
            return (
              <Link to={"/certs/" + certificate.cid}>
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
              </Link>
            );
          }) };
        </div>
      </div>
    </div>
  );
}

export default Certificates;
