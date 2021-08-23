import history from "./history";

function Header(props) {
  return (
    <header className="App-header">
      <div className="side-button">Side</div>
      <div className="sign-in-button" onClick={() => history.push("/signup")}>SIGN IN</div>
    </header>
  );
}

export default Header;
