import React, { Component } from "react";
import Header from "../Header/";
import Standings from "../Standings/";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Standings />
      </div>
    );
  }
}

export default App;
