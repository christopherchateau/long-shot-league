import React, { Component } from "react";
import chrisImg from "../../images/headshot.jpg";
import playerImg from "../../images/player.svg";
import "./Player.css";

class Player extends Component {
  render() {
    return (
      <div className="Player">
        <h3 className="rank">1</h3>
        <h3 className="name">chris</h3>
        <h3 className="points">12</h3>
        <img className="pic" src={playerImg} />
      </div>
    );
  }
}

export default Player;
