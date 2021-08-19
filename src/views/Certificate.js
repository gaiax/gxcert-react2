import { getImageOnIpfs } from "../util/ipfs"


function Certificate(props) {
  const image = props.certificate.image;
  props.fetchCertificateImage(image);

  return (
    <div className="certificate">
      <div className="certificate-content">
        <p className="certificate-title">
          {props.certificate.title}
        </p>
        <img src={props.certificate.imageSrc} className="certificate-icon" />
        <table className="certificate-detail">
          {props.certificate.description}
          <tr>
            <td>Date of issue: </td>
            <td>January 30th, 2020</td>
          </tr>
          <tr>
            <td>Publisher: </td>
            <td>Gaiax Co Ltd.</td>
          </tr>
          <tr>
            <td>Address of Publisher</td>
            <td>東京都千代田区平河町2-5-3 Nagatacho GRiD</td>
          </tr>
          <tr>
            <td>Phone of Publisher: </td>
            <td>03-5759-0300</td>
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

export default Certificate;
