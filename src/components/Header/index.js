import React, { Component } from "react";
import toddImg from "../../images/todd.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-logo">
          <h1>
            LONG SH
            <img className="todd-img" src={toddImg} />T LEAGUE
          </h1>
        </div>
        
        <div className="header-nav">

        <h3 className="header-nav-link">standings</h3>
        <h3 className="header-nav-link">teams</h3>
        <h3 className="header-nav-link">bonus</h3>

        </div>
      </div>
    );
  }
}

export default Header;
