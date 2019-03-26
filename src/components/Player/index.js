import React, { Component } from "react";
import Dan from "../../images/player.svg";
import Bmase from "../../images/player.svg";
import Scott from "../../images/player.svg";
import Kristin from "../../images/player.svg";
import Alex from "../../images/player.svg";
import Doherty from "../../images/player.svg";
import Kevin from "../../images/player.svg";
import Todd from "../../images/todd.png";
import Laura from "../../images/player.svg";
import Brent from "../../images/player.svg";
import Reed from "../../images/player.svg";
import Justin from "../../images/player.svg";
import Brewers from "../../images/player.svg";
import Matt from "../../images/player.svg";
import Fraske from "../../images/player.svg";
import Chris from "../../images/Chris.jpg";
import "./Player.css";

class Player extends Component {
  render() {
    const { name, total, rank, handlePlayerClick } = this.props;
    const playerPics = {
      Dan,
      Bmase,
      Scott,
      Kristin,
      Alex,
      Doherty,
      Kevin,
      Todd,
      Laura,
      Brent,
      Reed,
      Justin,
      Brewers,
      Matt,
      Fraske,
      Chris
    };
    
    return (
      <div className="Player" onClick={() => handlePlayerClick(name)}>
        <h3 className="player-rank">{rank}</h3>
        <h3 className="player-name">{name}</h3>
        <h3 className="player-points">{total}</h3>
        <div className="player-pic-wrapper">
          <img className="player-pic" src={playerPics[name]} />
        </div>
      </div>
    );
  }
}

export default Player;
