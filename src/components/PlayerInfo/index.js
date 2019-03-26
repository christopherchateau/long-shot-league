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
import Chris from "../../images/headshot.jpg";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    const { selectedPlayerData, handleBackClick } = this.props;
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
      <div className="PlayerInfo">
        <h1 className="player-info-name">{selectedPlayerData.name}</h1>
        <img className="player-info-pic" src={playerPics[selectedPlayerData.name]} />
        <div className="player-info-totals">
          <h5>
            points
            <br />{" "}
            <span className="player-info-num">{selectedPlayerData.points}</span>
          </h5>
          <h5>
            bonus
            <br />{" "}
            <span className="player-info-num">{selectedPlayerData.bonus}</span>
          </h5>
          <h5>
            total
            <br />{" "}
            <span className="player-info-num">{selectedPlayerData.total}</span>
          </h5>
        </div>
        <div className="player-info-teams">
          {selectedPlayerData.teams.map(team => (
            <h5 className={team.eliminated ? "eliminated" : ""} key={team.name}>
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
