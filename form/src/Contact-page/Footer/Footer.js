import React, { Component } from "react";

import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer--wrapper">
        <div className="footer">
          <div className="footer--link">
            <p>Created By Ezzeddine Jlassi</p>
          </div>
          <div className="footer--social-media">
            <ul>
              <li>
                <a href="https://www.facebook.com/ezz.dee.ne/" target="_blank">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jlassi.ezzeddine/"
                  target="_blank"
                >
                  <i class="fab fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Jlassiezzeddine" target="_blank">
                  <i class="fab fa-github-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
