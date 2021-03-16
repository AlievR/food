import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header/Header'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Banner from './Components/Banner/Banner'
import Comands from './Components/Comands/Comands'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route>
            <Intro />
            <About />
            <Banner />
            <Comands />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
