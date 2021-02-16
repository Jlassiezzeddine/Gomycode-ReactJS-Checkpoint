import React, { Component } from "react";

import "./ContactPageBody.scss";

export default class ContactPageBody extends Component {
  render() {
    return (
      <div className="body--wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 body--content--wrapper">
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
            <div className="col-lg-6 form--wrapper">
              <form>
                <div className="input--group">
                  <div class="input--field">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div class="input--field">
                    <label for="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                </div>
                <div class="text--field">
                  <label for="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Say what's on your mind..."
                  ></textarea>
                </div>

                <button>
                  Submit <i class="fas fa-angle-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
