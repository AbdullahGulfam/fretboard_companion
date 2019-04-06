import React, { Component } from "react";
import Fretboard from "./Fretboard";
import String from "./String";
import "./CSS/Layout.css";
import { Container } from "reactstrap";

export class Layout extends Component {
  render() {
    return (
      <div className="main">
        <h1 className="title">Fretboard Companion</h1>

        <h1 className="scaleName">C Major Scale</h1>
        <Fretboard />
        <Container className="strings">
          <String />
          <String />
          <String />
          <String />
          <String />
          <String />
        </Container>
      </div>
    );
  }
}

export default Layout;
