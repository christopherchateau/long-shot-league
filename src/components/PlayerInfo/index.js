import React, { Component } from "react";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  render() {
    const { handleBackClick } = this.props;
    return (
      <div className="PlayerInfo">
        <button className="back-btn" onClick={handleBackClick}>
          back
        </button>
        <h1>{this.props.selectedPlayer}</h1>
      </div>
    );
  }
}

export default PlayerInfo;
