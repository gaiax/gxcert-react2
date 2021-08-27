import history from "./history";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <Link to="/" className="logo">GxCert</Link>
        <Link to="/certs" className="header-left-link">CREATED</Link>
        <Link to="/new" className="header-left-link">ISSUE</Link>
      </div>
      <div className="sign-in-button" onClick={() => history.push("/signup")}>SIGN IN</div>
    </header>
  );
}

export default Header;
