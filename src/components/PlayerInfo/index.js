import React, { Component } from "react";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    return (
      <div className="PlayerInfo">
      <h1>{this.props.selectedPlayer}</h1>
      </div>
    );
  }
}

export default PlayerInfo;