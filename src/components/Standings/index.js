import React, { Component } from 'react';
import Player from '../Player';
import './Standings.css';

class Standings extends Component {
  render() {
    return (
      <div className="Standings">
        <div className="current-standings">
          <Player />
        </div>
      </div>
    );
  }
}

export default Standings;