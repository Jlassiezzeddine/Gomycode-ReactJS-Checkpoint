import React, { Component } from "react";

import "./ContactPage.scss";

import ContactPageBody from "./ContactPageBody/ContactPageBody";
import Footer from "./Footer/Footer";
import NavigationDesktop from "./Navigation/NavigationDesktop/NavigationDesktop";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact--page--wrapper">
        <NavigationDesktop></NavigationDesktop>
        <ContactPageBody></ContactPageBody>
        <Footer></Footer>
      </div>
    );
  }
}
