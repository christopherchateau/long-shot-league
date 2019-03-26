import React, { Component } from "react";
import Player from "../Player";
import loadingImg from "../../images/loading.gif";
import "./Standings.css";

class Standings extends Component {
  render() {
    const { players, handlePlayerClick } = this.props;

    const playerListSorted = players.sort((a, b) => {
      if (a.total > b.total) return -1;
      if (a.total < b.total) return 1;
    });

    const loadingGif = <img className="loading-img" src={loadingImg} />;

    let counter = 1;
    const formattedPlayers = playerListSorted.map((player, i) => {
      i > 0 && player.total === playerListSorted[i - 1].total
        ? counter++
        : (counter = 0);

      return (
        <Player
          handlePlayerClick={handlePlayerClick}
          {...player}
          rank={i + 1 - counter}
          key={player.name}
        />
      );
    });

    if (players.length) {
      return (
        <div className="Standings">
          <div className="current-standings-header">
            <h5>rank</h5>
            <h5>name</h5>
            <h5 className="current-standings-points">points</h5>
          </div>
          {formattedPlayers}
        </div>
      );
    } else {
      return loadingGif;
    }
  }
}

export default Standings;
