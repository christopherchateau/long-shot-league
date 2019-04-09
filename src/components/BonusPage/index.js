import React, { Component } from "react";
import Bonus from "../Bonus";
import loadingImg from "../../images/loading.gif";
import "./BonusPage.css";

class BonusPage extends Component {
  sortByName = input =>
    input.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    });

  render() {
    let { players, bonusList } = this.props;

    const playersDisplayed = this.sortByName(players).map(player => {
      const bonusListDisplayed = [];

      const playerBonusTotal = bonusList.reduce((total, bonus) => {
        if (bonus.name === player.name) {
          bonusListDisplayed.push(<Bonus bonusList={bonus} key={bonus.id} />);
          total += bonus.points;
        }
        return +total;
      }, 0);

      return (
        <div className="bonus-player" key={player.name}>
          <h3 className="bonus-player-name">{`${
            player.name
          } - ${playerBonusTotal}`}</h3>
          <div>{bonusListDisplayed}</div>
        </div>
      );
    });

    if (!players.length) {
      return <img className="loading-img" src={loadingImg} alt="loading" />;
    } else {
      return <div className="BonusPage">{playersDisplayed}</div>;
    }
  }
}

export default BonusPage;
