import React, { Component } from "react";
import Player from "../Player";
import "./Standings.css";

class Standings extends Component {
  render() {
    return (
      <div className="Standings">
        <div className="current-standings">
          <div className="current-standings-header">
            <h5>rank</h5>
            <h5>name</h5>
            <h5>points</h5>
          </div>
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </div>
      </div>
    );
  }
}

export default Standings;
