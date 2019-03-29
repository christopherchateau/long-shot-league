import React, { Component } from "react";
import Header from "../Header/";
import MainPage from "../MainPage/";
import "./App.css";

class App extends Component {
  state = {
    pageDisplay: "standings"
  };

  handleNavBarClick = pageDisplay => {
    this.setState({ pageDisplay });
  };

  render() {
    return (
      <div className="App">
        <Header handleNavBarClick={this.handleNavBarClick} />
        <MainPage pageDisplay={this.state.pageDisplay} />
      </div>
    );
  }
}

export default App;
