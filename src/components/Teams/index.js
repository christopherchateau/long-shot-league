import React, { Component } from "react";
import loadingImg from "../../images/loading.gif";
import "./Teams.css";

class Teams extends Component {
  state = {
    display: "show all",
    teamSort: "alphabetical"
  };

  toggleTeamDisplay = () => {
    let { display } = this.state;
    display === "show all" ? (display = "still alive") : (display = "show all");
    this.setState({ display });
  };

  render() {
    let { teamList } = this.props;
    const { display, teamSort } = this.state;
    const loadingGif = <img className="loading-img" src={loadingImg} />;

    if (display === "still alive") {
      teamList = teamList.filter(team => !team.is_eliminated);
    }

    const teams = teamList.map(team => (
      <div
        className={"team".concat(team.is_eliminated ? " red" : " green")}
        key={team.name}
      >
        <h3>
          {team.name} - {team.points}
        </h3>
        <h5>{team.drafted_by}</h5>
      </div>
    ));

    if (!teamList.length) {
      return loadingGif;
    } else {
      return (
        <div className="Teams">
        <div className="team-btn-wrapper">
          <button className="teams-toggle-btn" onClick={this.toggleTeamDisplay}>
            {display}
          </button>
          <button className="teams-display-btn" onClick={this.toggleTeamDisplay}>
            {teamSort}
          </button>
          </div>
          <br />
          <div className="teams-wrapper">{teams}</div>;
        </div>
      );
    }
  }
}

export default Teams;