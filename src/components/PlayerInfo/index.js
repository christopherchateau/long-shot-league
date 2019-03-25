import React, { Component } from "react";
import playerImg from "../../images/player.svg";
import { playerList } from "../../data/players.js";
import { teamList } from "../../data/teams.js";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    const { selectedPlayer, handleBackClick } = this.props;

    const selectedTeamsNames = playerList.find(
      player => player.name === selectedPlayer
    ).teams;

    const selectedTeamsData = teamList.filter(listTeam =>
      selectedTeamsNames.includes(listTeam.name)
    );
    console.log(selectedTeamsData);

    const preparedTeams = selectedTeamsData.map(team => {
      return (
        <h5
          className={"team".concat(team.eliminated ? " eliminated" : "")}
          key={team.name}
        >
          {team.name}
        </h5>
      );
    });

    return (
      <div className="PlayerInfo">
        <img className="player-info-pic" src={playerImg} />
        <h1>{selectedPlayer}</h1>
        {preparedTeams}
        <button className="back-btn" onClick={handleBackClick}>
          standings
        </button>
      </div>
    );
  }
}

export default PlayerInfo;
