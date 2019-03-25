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

    return (
      <div className="PlayerInfo">
        <img className="player-info-pic" src={playerImg} />
        <h1>{selectedPlayer}</h1>
        <div className="player-info-teams">
          {selectedTeamsData.map(team => (
            <h5
              className={"team".concat(team.eliminated ? " eliminated" : "")}
              key={team.name}
            >
              {team.name}
            </h5>
          ))}
        </div>
        <button className="back-btn" onClick={handleBackClick}>
          standings
        </button>
      </div>
    );
  }
}

export default PlayerInfo;
