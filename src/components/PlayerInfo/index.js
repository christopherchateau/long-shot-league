import React, { Component } from "react";
import playerImg from "../../images/player.svg";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    const { selectedPlayerData, handleBackClick } = this.props;
    return (
      <div className="PlayerInfo">
        <h1 className="player-info-name">{selectedPlayerData.name}</h1>
        <img className="player-info-pic" src={playerImg} />
        <div className="player-info-teams">
          {selectedPlayerData.teams.map(team => (
            <h5
              className={"team".concat(team.eliminated ? " eliminated" : "")}
              key={team.name}
            >
              {`${team.name} (${team.points})`}
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
