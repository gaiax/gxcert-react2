import history from "./history";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <Link to="/top" className="logo">GxCert</Link>
        { props.isLoggedIn ? (
            <Link to="/" className="header-left-link">取得証明書</Link>
          ) : ""
        }
        { props.isLoggedIn ? (
          <Link to="/issue" className="header-left-link">証明書発行</Link>
          ) : ""
        }
      </div>
      { !props.isLoggedIn ? (
          <div className="sign-in-button" onClick={() => history.push("/signup")}>Sign in</div>) : (
          <div className="header-right-links">
            <Link to="/profile/edit" className="edit-profile-button">プロフィール</Link>
            <div className="sign-out-button" onClick={props.signOut}>Sign out</div>
          </div>
          )
      }
    </header>
  );
}

export default Header;
