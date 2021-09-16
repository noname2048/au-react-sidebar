import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./pages/About";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Router>
        <header>
          <div className="deco" onClick={() => setShowNav(!showNav)}>
            <GiHamburgerMenu />
          </div>
        </header>
        <Navbar show={showNav} />
        <div className="main">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    </>
  );
}

export default App;
