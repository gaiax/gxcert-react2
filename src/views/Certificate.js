import { getImageOnIpfs } from "../util/ipfs"
import React from "react";

import { Link } from "react-router-dom";


class Certificate extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const cid = this.props.match.params.id;
    this.props.fetchCertificate(cid);
  }
  render() {
    return (
      <div className="certificate">
        <div className="certificate-content">
          <p className="certificate-title">
            {this.props.certificate.title}
          </p>
          <img src={this.props.certificateImage} className="certificate-icon" />
          <table className="certificate-detail">
            <tr>
              <td>Publisher: </td>
              <td>
                {this.props.certificate.group === undefined ? "" : this.props.certificate.group.name }
              </td>
            </tr>
            <tr>
              <td>Title: </td>
              <td>
                {this.props.certificate.title}
              </td>
            </tr>
            <tr>
              <td>Description: </td>
              <td>{this.props.certificate.description}</td>
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
      </div>
    );
  }
}

export default Certificate;
