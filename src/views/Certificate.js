import { getImageOnIpfs } from "../util/ipfs"
import getGxCert from "../gxcert-client"
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
    const gxCert = getGxCert();
    console.log(props
    const id = this.props.match.params.id;
    const that = this;
    gxCert.getCertByCid(id).then(certificate => {
      that.setState({
        from: certificate.from,
        to: certificate.to,
        title: certificate.title,
        description: certificate.description,
        issued_at: new Date(certificate.issued_at * 1000),
        url: certificate.url,
      });
      getImageOnIpfs(certificate.image).then(imageUrl => {
        that.setState({
          image: imageUrl
        });
      });
    });
  }
  render() {
    return (
      <div className="certificate">
        <div className="certificate-content">
          <p className="certificate-title">
            {this.state.title}
          </p>
          <img src={this.state.image} className="certificate-icon" />
          <table className="certificate-detail">
            {this.state.description}
            <tr>
              <td>From: </td>
              <td>{this.state.from}</td>
            </tr>
            <tr>
              <td>To: </td>
              <td>{this.state.to}</td>
            </tr>
            <tr>
              <td>Date of issue: </td>
              <td>{this.state.issued_at.toISOString()}</td>
            </tr>
            <tr>
              <td>URL: </td>
              <td>{this.state.url}</td>
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
