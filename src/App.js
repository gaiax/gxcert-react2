import React from "react";
import logo from './logo.svg';
import Header from "./Header";
import Top from "./views/Top";
import SignIn from "./views/SignIn";
import Registration from "./views/Registration";
import Certificates from "./views/Certificates";
import Certificate from "./views/Certificate";
import NewCert from "./views/NewCert";
import NewProfile from "./views/NewProfile";
import NewGroup from "./views/NewGroup";
import GroupMembers from "./views/GroupMembers";
import Issuer from "./views/Issuer";
import Issue from "./views/Issue";
import './App.css';
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super(); 
  }
  render() {
    const that = this;
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact={true} path="/" render={ (routeProps) => {
            if (that.props.state.from === "") { 
              return (
                <Top />
              );
            }
            return (<Certificates
              {...routeProps}
              userCerts={that.props.state.certificates}
              fetchCertificates={that.props.fetchCertificates}
            />)

          } }/>
          <Route exact={true} path="/signup" render={ (routeProps) => <SignIn
            {...routeProps}
            signIn={that.props.signIn}
            />
          } />
          <Route exact={true} path="/new/" render={ () => <NewCert
              fetchGroups={that.props.fetchGroups}
              onChangeTitle={that.props.onChangeTitle}
              onChangeDescription={that.props.onChangeDescription}
              onChangeImage={that.props.onChangeImage}
              onChangeGroup={that.props.onChangeGroup}
              sign={that.props.sign}
              from={that.props.state.from}
              image={that.props.state.image}
              groups={that.props.state.groups}
            />
          } />
          <Route exact={true} path="/issue/" render={ (routeProps) => <Issuer
            {...routeProps}
            groups={that.props.state.groupsInIssuer}
            certificates={that.props.state.certificatesInIssuer}
            fetchCertificates={that.props.fetchCertificatesInIssuer}
            issue={that.props.issue}
            />
          } />
          <Route exact={true} path="/issue/:certId" render={ (routeProps) => <Issue
            {...routeProps}
            certificate={that.props.state.certificateInIssue}
            fetchCertificate={that.props.fetchCertificateInIssue}
            onChangeToInIssue={that.props.onChangeToInIssue}
            issue={that.props.issue}
          />
          } />
          <Route exact={true} path="/certs/:id" render={ (routeProps) => <Certificate

            {...routeProps}
            userCert={that.props.state.certificate}
            certificateImage={that.props.state.certificateImage}
            fetchCertificate={that.props.fetchCertificate}
            />
          } />
          <Route exact={true} path="/group/new" render={ (routeProps) => <NewGroup
            {...routeProps}
            registerGroup={that.props.registerGroup}
            onChangeGroupName={that.props.onChangeGroupName}
            onChangeGroupAddress={that.props.onChangeGroupAddress}
            onChangeGroupPhone={that.props.onChangeGroupPhone}
            />
          } />
          <Route exact={true} path="/group/:id" render={ (routeProps) => <GroupMembers
            {...routeProps}
            group={that.props.state.group}
            fetchGroup={that.props.fetchGroup}
            inviteMember={that.props.inviteMember}
            />
          } />
          <Route exact={true} path="/profile/new" render={ (routeProps) => <NewProfile
            {...routeProps}
            imageUrl={that.props.state.profileImageUrl}
            registerProfile={that.props.registerProfile}
            onChangeProfileName={that.props.onChangeProfileName}
            onChangeProfileEmail={that.props.onChangeProfileEmail}
            onChangeProfileImage={that.props.onChangeProfileImage}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
