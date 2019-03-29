import React, { Component } from "react";
import "./Teams.css";

class Teams extends Component {
  state = {
    display: "show all"
  };

  toggleTeamDisplay = () => {
    let { display } = this.state;
    display === "show all" ? (display = "still alive") : (display = "show all");
    this.setState({ display });
  };

  render() {
    const { display } = this.state;
    let { teamList } = this.props;

    if (display === "still alive") {
      teamList = teamList.filter(team => !team.is_eliminated);
    }

    const teams = teamList.slice(1).map(team => (
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
    return (
      <div>
        <button className="teams-toggle-btn" onClick={this.toggleTeamDisplay}>
          {display}
        </button>
        <br />
        <div className="Teams">{teams}</div>;
      </div>
    );
  }
}

export default Teams;