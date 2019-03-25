import React, { Component } from "react";
import chrisImg from "../../images/headshot.jpg";
import playerImg from "../../images/player.svg";
import "./Player.css";

class Player extends Component {
  render() {
    const { name, points, rank } = this.props;
    return (
      <div className="Player">
        <h3 className="player-rank">{rank}</h3>
        <h3 className="player-name">{name}</h3>
        <h3 className="player-points">{points}</h3>
        <img className="player-pic" src={playerImg} />
      </div>
    );
  }
}

export default Player;
