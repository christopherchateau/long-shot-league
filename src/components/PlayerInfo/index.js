import React, { Component } from "react";
import playerImg from "../../images/player.svg";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    const { handleBackClick } = this.props;
    return (
      <div className="PlayerInfo">
        <img className="player-info-pic"src={playerImg} />
        <h1>{this.props.selectedPlayer}</h1>
        <button className="back-btn" onClick={handleBackClick}>
          back
        </button>
      </div>
    );
  }
}

export default PlayerInfo;
