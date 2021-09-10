import { getImageOnIpfs } from "../util/ipfs"
import React from "react";

import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";


class Certificate extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const userCertId = parseInt(this.props.match.params.id);
    this.props.fetchCertificate(userCertId);
  }
  render() {
    console.log(this.props.userCert);
    return (
      <div className="certificate">
        { (!this.props.userCert || !this.props.userCert.certificate) ? (
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          ) : (
            <div className="certificate-content">
              <p className="certificate-title">
                {this.props.userCert.certificate.title}
              </p>
              <img src={this.props.certificateImage} className="certificate-icon" />
              <table className="certificate-detail">
                <tr>
                  <td>Issued at: </td>
                  <td>{(new Date(parseInt(this.props.userCert.timestamp * 1000))).toISOString()}</td>
                </tr>
                <tr>
                  <td>Issuer: </td>
                  <td>
                    {!this.props.userCert.certificate.group ? "" : this.props.userCert.certificate.group.name }
                  </td>
                </tr>
                <tr>
                  <td>To: </td>
                  <td>
                    { this.props.userCert.to }
                  </td>
                </tr>
                <tr>
                  <td>Title: </td>
                  <td>
                    {this.props.userCert.certificate.title}
                  </td>
                </tr>
                <tr>
                  <td>Description: </td>
                  <td>{this.props.userCert.certificate.description}</td>
                </tr>
              </table>
              <div className="certificate-buttons">
                <div className="certificate-button">
                  参照URLの発行
                </div>
                <div className="certificate-button">
                  PDFのダウンロード
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Certificate;
