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
import EditProfile from "./views/EditProfile";
import NewGroup from "./views/NewGroup";
import EditGroup from "./views/EditGroup";
import GroupMembers from "./views/GroupMembers";
import Issuer from "./views/Issuer";
import Issue from "./views/Issue";
import './App.css';
import { Switch, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends React.Component {
  constructor() {
    super(); 
  }
  render() {
    const that = this;
    return (
      <div className="App">
        <Header
          isLoggedIn={that.props.state.from !== ""}
          signOut={that.props.signOut}
        ></Header>
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
          <Route exact={true} path="/top" render={ (routeProps) => {
            return (
              <Top />
            )
          } }/>
          <Route exact={true} path="/signup" render={ (routeProps) => <SignIn
            {...routeProps}
            signIn={that.props.signIn}
            />
          } />
          <Route exact={true} path="/new/" render={ () => <NewCert
              fetchGroups={that.props.fetchGroups}
              fetchGroupsInSidebar={that.props.fetchGroupsInSidebar}
              groupsInSidebar={that.props.state.groupsInSidebar}
              groupInSidebar={that.props.state.groupInSidebar}
              onChangeGroupInSidebar={that.props.onChangeGroupInSidebar}
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
            fetchGroupsInSidebar={that.props.fetchGroupsInSidebar}
            groupsInSidebar={that.props.state.groupsInSidebar}
            groupInSidebar={that.props.state.groupInSidebar}
            onChangeGroupInSidebar={that.props.onChangeGroupInSidebar}
            groups={that.props.state.groupsInIssuer}
            certificates={that.props.state.certificatesInIssuer}
            fetchCertificates={that.props.fetchCertificatesInIssuer}
            issue={that.props.issue}
            invalidateUserCert={that.props.invalidateUserCert}
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
          <Route exact={true} path="/group/edit" render={ (routeProps) => <EditGroup
            {...routeProps}
            fetchGroupsInSidebar={that.props.fetchGroupsInSidebar}
            groupsInSidebar={that.props.state.groupsInSidebar}
            groupInSidebar={that.props.state.groupInSidebar}
            onChangeGroupInSidebar={that.props.onChangeGroupInSidebar}
            group={that.props.state.groupInEdit}
            updateGroup={that.props.updateGroup}
            fetchGroup={that.props.fetchGroupInEdit}
            onChangeGroupId={that.props.onChangeGroupIdInEdit}
            onChangeGroupName={that.props.onChangeGroupNameInEdit}
            onChangeGroupAddress={that.props.onChangeGroupAddressInEdit}
            onChangeGroupPhone={that.props.onChangeGroupPhoneInEdit}
            />
          } />
          <Route exact={true} path="/group" render={ (routeProps) => <GroupMembers
            {...routeProps}
            fetchGroupsInSidebar={that.props.fetchGroupsInSidebar}
            groupsInSidebar={that.props.state.groupsInSidebar}
            groupInSidebar={that.props.state.groupInSidebar}
            onChangeGroupInSidebar={that.props.onChangeGroupInSidebar}
            group={that.props.state.group}
            fetchGroup={that.props.fetchGroup}
            inviteMember={that.props.inviteMember}
            onChangeGroupMemberToInvite={that.props.onChangeGroupMemberToInvite}
            disableGroupMember={that.props.disableGroupMember}
            />
          } />
          <Route exact={true} path="/profile/new" render={ (routeProps) => <NewProfile
            {...routeProps}
            image={that.props.state.profileImage}
            registerProfile={that.props.registerProfile}
            onChangeProfileName={that.props.onChangeProfileName}
            onChangeProfileEmail={that.props.onChangeProfileEmail}
            onChangeProfileImage={that.props.onChangeProfileImage}
            />
          } />
          <Route exact={true} path="/profile/edit" render={ (routeProps) => <EditProfile
            {...routeProps}
            image={that.props.state.profileImageInEdit}
            updateProfile={that.props.updateProfile}
            profile={that.props.state.profileInEdit}
            profileName={that.props.state.profileNameInEdit}
            profileEmail={that.props.state.profileEmailInEdit}
            profileImage={that.props.state.profileImageInEdit}
            fetchProfile={that.props.fetchProfileInEdit}
            onChangeProfileName={that.props.onChangeProfileNameInEdit}
            onChangeProfileEmail={that.props.onChangeProfileEmailInEdit}
            onChangeProfileImage={that.props.onChangeProfileImageInEdit}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
