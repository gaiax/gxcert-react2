import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

class Issuer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchGroupsInSidebar();
  }
  render() {
    return (
      <div className="issuer">
        <div className="sidebar">
            <p className="sidebar-title">ISSUE</p>
            <select className="sidebar-group" onChange={this.props.onChangeGroupInSidebar} defaultValue={ this.props.groupInSidebar !== null ? this.props.groupInSidebar.groupId.toString() : ""}>
              <option hidden>Choose group</option>
              { this.props.groupsInSidebar !== null ? this.props.groupsInSidebar.map(group => {
                return (
                  <option value={group.groupId.toString()}>{group.name}</option>
                )
              }) : "" }
              <option value="new">Create new group</option>
            </select>
          <ul>
            <li><Link to="/issue">CERTIFICATE</Link></li>
            <li><Link to={ this.props.groupInSidebar !== null ? "/group/" + this.props.groupInSidebar.groupId.toString() : "#"} >MEMBERS</Link></li>
            <li><Link to={ this.props.groupInSidebar !== null ? "/group/edit/" + this.props.groupInSidebar.groupId.toString() : "#" }>ISSUER</Link></li>
          </ul>
        </div>
        <div className="issuer-certificates">
          <div>
            <Link to="/new">
              <div className="issuer-certificates-new">新規作成</div>
            </Link>
            <br/>
            <p className="issuer-certificates-title">証明書</p>
            { this.props.groupInSidebar === null ? (
              <div className="issuer-certificates-select-group">
                Choose group on sidebar.
              </div>
            ) : (
            <div className="issuer-certificates-list">
              { this.props.certificates !== null ? 
                this.props.certificates.map(certificate => {
                  return (
                    <div className="issuer-certificates-list-cell">
                      <img src={certificate.imageUrl} className="issuer-certificates-list-cell-icon"/>
                      <p className="issuer-certificates-list-cell-title">
                        {certificate.title} 
                      </p>
                      <Link to={"/issue/" + certificate.id}>
                        <div className="issuer-certificates-list-cell-issue">発行</div>
                      </Link>
                    </div>
                  );
                }) : <Loader type="Puff" color="#00BFFF" height={100} width={100} /> 
              }
            </div>
            ) }
          </div>
        { this.props.certificates !== null ? this.props.certificates.map((certificate) => {
          return (
            <div className="issuer-certificate">
              <p className="issuer-certificate-title">
                {certificate.title}
              </p>
              <div className="issuer-certificate-list">
                { certificate.userCerts.map((userCert, index) => {
                  return (
                    <div className="certificates-list-cell">
                      <img src={userCert.profile ? userCert.profile.imageUrl : ""} className="issuer-certificate-list-cell-icon"/>
                      <div className="issuer-certificate-list-cell-detail">
                        <p className="issuer-certificate-list-cell-name">
                          {userCert.profile ? userCert.profile.name : ""} 
                        </p>
                        <p className="issuer-certificate-list-cell-address">
                          { userCert.to }
                        </p>
                      </div>
                      <div className="issuer-certificate-list-cell-invalidate" onClick={() => this.props.invalidateUserCert(userCert.userCertId)}>無効化</div>
                    </div>
                  );
                }) }
              </div>
            </div>
          );
        }) : "" }
        </div>
      </div>
    );
  }
}

export default Issuer;
