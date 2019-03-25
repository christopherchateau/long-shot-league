import React, { Component } from "react";
import PlayerInfo from "../PlayerInfo";
import Standings from "../Standings";
import "./MainPage.css";

class MainPage extends Component {
  state = {
    display: "standings"
  };

  render() {
    return (
      <div className="MainPage">
        {this.state.display === "player info" && <PlayerInfo />}
        {this.state.display === "standings" && <Standings />}
      </div>
    );
  }
}

export default MainPage;
