import React, { Component } from "react";
import Bonus from "../Bonus";
import loadingImg from "../../images/loading.gif";
import "./BonusPage.css";

class BonusPage extends Component {
  render() {
    const { players, bonusList } = this.props;
    const loadingGif = <img className="loading-img" src={loadingImg} />;

    const playersDisplayed = players.map(player => {
      const bonusListDisplayed = [];

      const playerBonusTotal = bonusList.reduce((total, bonus) => {
        if (bonus.name === player.name) {
          bonusListDisplayed.push(<Bonus bonusList={bonus} key={bonus.id} />);
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

    if (!players.length) {
      return loadingGif;
    } else {
      return <div className="BonusPage">{playersDisplayed}</div>;
    }
  }
}

export default BonusPage;
