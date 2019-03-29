import React, { Component } from "react";
import Bonus from "../Bonus";
import "./BonusPage.css";

class BonusPage extends Component {
  render() {
    const { players, bonusList } = this.props;

    const playersDisplayed = players.map(player => {
      const bonusListDisplayed = [];

      const playerBonusTotal = bonusList.reduce((total, bonus) => {
        if (bonus.name === player.name) {
          bonusListDisplayed.push(
            <Bonus bonusList={bonus} key={bonus.id} />
          );
          total += bonus.points;
        }
        return +total;
      }, 0);
      return (
        <div className="player" key={player.name}>
          <h3 className="player-name">{`${
            player.name
          } - ${playerBonusTotal}`}</h3>
          <div>{bonusListDisplayed}</div>
        </div>
      );
    });
    return <div className="BonusPage">{playersDisplayed}</div>;
  }
}

export default BonusPage;
