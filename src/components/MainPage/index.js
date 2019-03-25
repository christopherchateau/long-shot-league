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
      const total = points + bonus;

      players.push({
        name: player.name,
        teams,
        points,
        bonus,
        total
      });
    });
    this.setState({ players });
  };

  generatePointTotal = teams => teams.reduce((a, b) => a + b.points, 0);

  getPlayerBonus = name =>
    playerList.find(player => player.name === name).bonus;

  handlePlayerClick = selectedPlayer => {
    this.setState({ selectedPlayer, display: "player info" });
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
          <Standings
            players={players}
            handlePlayerClick={this.handlePlayerClick}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
