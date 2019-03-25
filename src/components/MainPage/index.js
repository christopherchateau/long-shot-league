import React, { Component } from "react";
import PlayerInfo from "../PlayerInfo";
import Standings from "../Standings";
import "./MainPage.css";

class MainPage extends Component {
  state = {
    selectedPlayer: "",
    display: "standings"
  };

  handlePlayerClick = selectedPlayer => {
    this.setState({ selectedPlayer, display: "player info" });
  };

  handleBackClick = () => {
    this.setState({ selectedPlayer: "", display: "standings" });
  };

  render() {
    const { display, selectedPlayer } = this.state;
    return (
      <div className="MainPage">
        {display === "player info" && (
          <PlayerInfo
            selectedPlayer={selectedPlayer}
            handleBackClick={this.handleBackClick}
          />
        )}
        {display === "standings" && (
          <Standings handlePlayerClick={this.handlePlayerClick} />
        )}
      </div>
    );
  }
}

export default MainPage;
