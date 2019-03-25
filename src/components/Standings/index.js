import React, { Component } from "react";
import Player from "../Player";
// import PlayerInfo from "../PlayerInfo";
import { playerList } from "../../data/players.js";
import "./Standings.css";

class Standings extends Component {
  render() {
    const playerListSorted = playerList.sort((a, b) => {
      if (a.points > b.points) return -1;
      if (a.points < b.points) return 1;
    });

    const players = playerListSorted.map((player, i) => (
      <Player {...player} rank={i + 1} />
    ));

    return (
      <div className="Standings">
        <div className="current-standings-header">
          <h5>rank</h5>
          <h5>name</h5>
          <h5 className="current-standings-points">points</h5>
        </div>
        {players}
      </div>
    );
  }
}

export default Standings;
