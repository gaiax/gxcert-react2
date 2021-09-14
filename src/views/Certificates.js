import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { dateToString } from "../util/date";

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
            取得証明書
          </p>
          <div className="certificates-list">
            { this.props.userCerts !== null && this.props.userCerts.length !== 0 ? this.props.userCerts.map((userCert, index) => {
              return (
                <Link to={"/certs/" + userCert.userCertId}>
                  <div className="certificates-list-cell">
                    <img src={userCert.certificate.imageUrl} className="certificates-list-cell-icon"/>
                    <div className="certificates-list-cell-detail">
                      <p className="certificates-list-cell-title">
                        {userCert.certificate.title} 
                      </p>
                      <p className="certificates-list-cell-by">
                        {userCert.certificate.groupName}
                      </p>
                      <p className="certificates-list-cell-date">
                        { dateToString(new Date(parseInt(userCert.timestamp) * 1000)) }
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }) : ""}
            { this.props.userCerts !== null && this.props.userCerts.length === 0 ? <p>証明書がありません</p> : "" }
            { this.props.userCerts === null ? <Loader type="Puff" color="#00BFFF" height={100} width={100} /> : "" }
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
