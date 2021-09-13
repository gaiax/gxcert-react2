import { getImageOnIpfs } from "../util/ipfs"
import React from "react";

import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import domtoimage from "dom-to-image";
import { copyToClipboard } from "../util/clipboard";


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
        { (this.props.userCert && this.props.userCert.certificate) ? (
        <div className="hidden">
          <div className="certificate-content-export" id="certificate-content-export">
            <p className="certificate-title">
              {this.props.userCert.certificate.title}
            </p>
            <img src={this.props.certificateImage} className="certificate-icon" />
            <table className="certificate-detail">
              <tr>
                <td>Issue Date: </td>
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
            <a id="cert-link" download="cert.png" href="" ></a>
          </div>
        </div>
        ) : ""}
        { (!this.props.userCert || !this.props.userCert.certificate) ? (
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          ) : (
            <div className="certificate-content" id="certificate-content">
              <p className="certificate-title">
                {this.props.userCert.certificate.title}
              </p>
              <img src={this.props.certificateImage} className="certificate-icon" />
              <table className="certificate-detail">
                <tr>
                  <td>Issue Date: </td>
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
              <a id="cert-link" download="cert.png" href="" ></a>
              <div className="certificate-buttons">
                <div className="certificate-button" onClick={() => {
                  copyToClipboard(window.location.href)
                  alert("コピーしました");
                }} >
                  参照URLの発行
                </div>
                <div className="certificate-button" onClick={() => {
                  domtoimage.toPng(document.getElementById("certificate-content-export"))
                    .then(dataUrl => {
                      document.getElementById("cert-link").href = dataUrl;
                      document.getElementById("cert-link").click();
                    }).catch(err => {
                      console.error(err);
                      alert("証明書の書き出しに失敗しました");
                    });
                }}>
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
