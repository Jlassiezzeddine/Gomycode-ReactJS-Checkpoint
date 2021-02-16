import React from "react";

import "./NavigationDesktop.scss";

const NavigationDesktop = () => {
  return (
    <div className="navigation--wrapper">
      <nav className="navigation">
        <div className="logo">
          <a href="#">React.Checkpoint</a>
        </div>
        <ul className="navigation--list">
          <li className="navigation--link">
            <a href="#">About</a>
          </li>
          <li className="navigation--link">
            <a href="#">Team</a>
          </li>
          <li className="navigation--link active--link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationDesktop;
