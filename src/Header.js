import history from "./history";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <Link to="/" className="logo">GxCert</Link>
        <Link to="/issue" className="header-left-link">ISSUE</Link>
      </div>
      { !props.isLoggedIn ? (
          <div className="sign-in-button" onClick={() => history.push("/signup")}>SIGN IN</div>) : (
          <div className="sign-out-button" onClick={props.signOut}>SIGN OUT</div>)
      }
    </header>
  );
}

export default Header;
