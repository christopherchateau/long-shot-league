import React, { Component } from "react";
import "./Bonus.css";

class Bonus extends Component {
  render() {
    const { bonusList } = this.props;
    return (
      <div className="Bonus">
        <h5>{`${bonusList.description} (${bonusList.points}pt)`}</h5>
      </div>
    );
  }
}

export default Bonus;
