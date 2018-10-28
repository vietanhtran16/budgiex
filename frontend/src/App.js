import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SplashPage from "./SplashPage";
import SetUpPage from "./SetUpPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/SetUp" component={SetUpPage} />
          <Route exact path="/" component={SplashPage} />
        </div>
      </Router>
      
    );
  }
}

export default App;
