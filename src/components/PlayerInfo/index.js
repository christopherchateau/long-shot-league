import React, { Component } from "react";
import playerImg from "../../images/player.svg";
import { playerList } from "../../data/players.js";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    const { selectedPlayer, handleBackClick } = this.props;
    const player = playerList.find(player => player.name === selectedPlayer)

    return (
      <div className="PlayerInfo">
        <img className="player-info-pic" src={playerImg} />
        <h1>{selectedPlayer}</h1>
        <h3>{player.teams.join(' - ')}</h3>
        <button className="back-btn" onClick={handleBackClick}>
          standings
        </button>
      </div>
    );
  }
}

export default PlayerInfo;
