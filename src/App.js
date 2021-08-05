import logo from './logo.svg';
import Header from "./Header";
import Top from "./views/Top";
import SignIn from "./views/SignIn";
import Registration from "./views/Registration";
import Certificates from "./views/Certificates";
import Certificate from "./views/Certificate";
import NewCert from "./views/NewCert";
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact={true} path="/" component={Top} />
        <Route exact={true} path="/signup" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
