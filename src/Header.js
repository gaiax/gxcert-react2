import history from "./history";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="App-header">
      <div className="header-wrapper">
        <Link to="/" className="logo">GxCert</Link>
      </div>
      <div className="sign-in-button" onClick={() => history.push("/signup")}>SIGN IN</div>
    </header>
  );
}

export default Header;
