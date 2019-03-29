import React, { Component } from "react";
import PlayerInfo from "../PlayerInfo";
import Standings from "../Standings";
import { getPlayers } from "../../apiCalls";
import { getTeams } from "../../apiCalls";
import { getBonusData } from "../../apiCalls";
import "./MainPage.css";

class MainPage extends Component {
  state = {
    selectedPlayer: "",
    display: "standings",
    players: []
  };

  componentDidMount = async () => {
    const playerList = await getPlayers();
    const teamList = await getTeams();
    let bonusData = await getBonusData();

    await this.loadPlayerData(playerList, teamList, bonusData);
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
