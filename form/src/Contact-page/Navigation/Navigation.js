import React, { Component } from "react";
import Brand from "./Navigation-components/Brand";
import NavList from "./Navigation-components/NavList";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="container navigation d-flex align-items-center justify-content-between">
        <Brand></Brand>
        <NavList></NavList>
      </nav>
    );
  }
}
