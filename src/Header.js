import history from "./history";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <Link to="/top" className="logo">GxCert</Link>
        { props.isLoggedIn ? (
            <Link to="/" className="header-left-link">OBTAINED</Link>
          ) : ""
        }
        { props.isLoggedIn ? (
          <Link to="/issue" className="header-left-link">ISSUE</Link>
          ) : ""
        }
      </div>
      { !props.isLoggedIn ? (
          <div className="sign-in-button" onClick={() => history.push("/signup")}>SIGN IN</div>) : (
          <div className="header-right-links">
            <Link to="/profile/edit" className="edit-profile-button">PROFILE</Link>
            <div className="sign-out-button" onClick={props.signOut}>SIGN OUT</div>
          </div>
          )
      }
    </header>
  );
}

export default Header;
