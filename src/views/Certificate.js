import { getImageOnIpfs } from "../util/ipfs"
import React from "react";



class Certificate extends React.Component {
  constructor() {
    super();
    this.state = {
      from: "",
      to: "",
      title: "",
      description: "",
      issued_at: new Date(0),
      url: "",
      image: "",
    }
  }
  componentDidMount() {
    const cid = this.props.match.params.id;
    this.props.fetchCertificate(cid);
  }
  render() {
    console.log("cert is ");
    console.log(this.props.certificate);
    return (
      <div className="certificate">
        <div className="certificate-content">
          <p className="certificate-title">
            {this.props.certificate.title}
          </p>
          <img src={this.props.certificateImage} className="certificate-icon" />
          {this.state.description}
          <table className="certificate-detail">
            <tr>
              <td>From: </td>
              <td>{this.props.certificate.from}</td>
            </tr>
            <tr>
              <td>To: </td>
              <td>{this.props.certificate.to}</td>
            </tr>
            <tr>
              <td>Date of issue: </td>
              <td>{this.props.certificate.issued_at ? (new Date(this.props.certificate.issued_at)).toISOString() : ""}</td>
            </tr>
            <tr>
              <td>URL: </td>
              <td><a href={this.props.certificate.url} target="_blank">{this.props.certificate.url}</a></td>
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
