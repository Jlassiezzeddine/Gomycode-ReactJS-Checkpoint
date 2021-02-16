import React, { Component } from "react";

import "./ContactPageBody.scss";

export default class ContactPageBody extends Component {
  render() {
    return (
      <div className="body--wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="body--content">
                <h1>Let's talk</h1>
                <p>Ask us anything or just say hi...</p>
              </div>
              <div className="contact--info">
                <ul>
                  <li>
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+21626796814">+216 26 79 68 14</a>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <a href="mailto:jlassiezzeddine@gmail.com">
                      jlassiezzeddine@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">form</div>
          </div>
        </div>
      </div>
    );
  }
}
