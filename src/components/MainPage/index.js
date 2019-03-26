import React, { Component } from "react";
import PlayerInfo from "../PlayerInfo";
import Standings from "../Standings";
import "./MainPage.css";

class MainPage extends Component {
  state = {
    selectedPlayer: "",
    display: "standings",
    players: []
  };

  componentDidMount = async () => {
    const playerList = await this.getPlayers();
    const teamList = await this.getTeams();
    await this.loadPlayerData(playerList, teamList);
  };

  getPlayers = async () => {
    const response = await fetch(
      "https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/players"
    );
    const data = await response.json();
    return data;
  };

  getTeams = async () => {
    const response = await fetch(
      "https://long-shot-league-be.herokuapp.com/api/v1/longshotleague/teams"
    );
    const data = await response.json();
    return data;
  };

  loadPlayerData = (playerList, teamList) => {
    const players = [];

    playerList.forEach(player => {
      const teams = teamList.filter(
        listTeam => listTeam.drafted_by === player.name
      );
      const points = this.generatePointTotal(teams);
      const bonus = this.getPlayerBonus(playerList, player.name);
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

  getPlayerBonus = (playerList, name) =>
    +playerList.find(player => player.name === name).bonus_points;

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
