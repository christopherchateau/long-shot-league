import React, { Component } from "react";
import PlayerInfo from "../PlayerInfo";
import Standings from "../Standings";
import { playerList } from "../../data/players.js";
import { teamList } from "../../data/teams.js";
import "./MainPage.css";

class MainPage extends Component {
  state = {
    selectedPlayer: "",
    display: "standings",
    players: []
  };

  componentDidMount = () => {
    this.loadPlayerData();
  };

  loadPlayerData = () => {
    const players = [];

    playerList.forEach(player => {
      const teams = teamList.filter(listTeam =>
        player.teams.includes(listTeam.name)
      );
      const points = this.generatePointTotal(teams);
      const bonus = this.getPlayerBonus(player.name);

      players.push({ name: player.name, teams, points, bonus });
    });
    this.setState({ players });
  };

  generatePointTotal = teams => {
    return teams.reduce((a, b) => a + b.points, 0);
  };

  getPlayerBonus = name => {
    return playerList.find(player => player.name === name).bonus;
  };

  handlePlayerClick = selectedPlayer => {
    this.setState({ selectedPlayer, display: "player info" });
    console.log(this.state.players);
  };

  handleBackClick = () => {
    this.setState({ selectedPlayer: "", display: "standings" });
  };

  render() {
    const { display, selectedPlayer, players } = this.state;
    const selectedPlayerData = players.find(
      player => player.name === selectedPlayer
    );
    return (
      <div className="MainPage">
        {display === "player info" && (
          <PlayerInfo
            selectedPlayerData={selectedPlayerData}
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
