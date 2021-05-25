import logo from './logo.svg';
import Header from "./Header";
import Top from "./views/Top";
import SignIn from "./views/SignIn";
import Registration from "./views/Registration";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Registration />
    </div>
  );
}

export default App;
