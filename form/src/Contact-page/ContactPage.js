import React, { Component } from "react";

import ContactPageBody from "./body/ContactPageBody";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

export default class ContactPage extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <ContactPageBody></ContactPageBody>
        <Footer></Footer>
      </div>
    );
  }
}
