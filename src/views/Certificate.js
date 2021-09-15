import { getImageOnIpfs } from "../util/ipfs"
import React from "react";

import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import domtoimage from "dom-to-image";
import { copyToClipboard } from "../util/clipboard";
import config from "../config";
import { dateToString } from "../util/date";


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
                <td>発行日: </td>
                <td>{dateToString(new Date(parseInt(this.props.userCert.timestamp * 1000)))}</td>
              </tr>
              <tr>
                <td>発行先: </td>
                <td>
                  { this.props.userCert.to }
                </td>
              </tr>
              <tr>
                <td>証明書名: </td>
                <td>
                  {this.props.userCert.certificate.title}
                </td>
              </tr>
              <tr>
                <td>説明: </td>
                <td>{this.props.userCert.certificate.description}</td>
              </tr>
              <tr>
                <td>発行元: </td>
                <td>
                  {!this.props.userCert.certificate.group ? "" : this.props.userCert.certificate.group.name }
                </td>
              </tr>
              <tr>
                <td>発行元住所: </td>
                <td>
                  {!this.props.userCert.certificate.group ? "" : this.props.userCert.certificate.group.residence }
                </td>
              </tr>
              <tr>
                <td>発行元電話番号: </td>
                <td>
                  {!this.props.userCert.certificate.group ? "" : this.props.userCert.certificate.group.phone }
                </td>
              </tr>
            </table>
              <img src={this.props.userCert.qr} width="100" height="100" />
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
                  <td>発行日: </td>
                  <td>{dateToString(new Date(parseInt(this.props.userCert.timestamp * 1000)))}</td>
                </tr>
                <tr>
                  <td>発行先: </td>
                  <td>
                    { this.props.userCert.to }
                  </td>
                </tr>
                <tr>
                  <td>証明書名: </td>
                  <td>
                    {this.props.userCert.certificate.title}
                  </td>
                </tr>
                <tr>
                  <td>説明: </td>
                  <td>{this.props.userCert.certificate.description}</td>
                </tr>
                <tr>
                  <td>発行元: </td>
                  <td>
                    {!this.props.userCert.certificate.group ? "" : <a href={config.host + "/group/" + this.props.userCert.certificate.group.groupId}>{this.props.userCert.certificate.group.name}</a> }
                  </td>
                </tr>
                <tr>
                  <td>発行元住所: </td>
                  <td>
                    {!this.props.userCert.certificate.group ? "" : this.props.userCert.certificate.group.residence }
                  </td>
                </tr>
                <tr>
                  <td>発行元電話番号: </td>
                  <td>
                    {!this.props.userCert.certificate.group ? "" : this.props.userCert.certificate.group.phone }
                  </td>
                </tr>
              </table>
              <img src={this.props.userCert.qr} width="100" height="100" />
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
                  証明書のダウンロード
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Certificate;
