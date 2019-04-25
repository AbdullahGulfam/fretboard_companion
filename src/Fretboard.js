import React, { Component } from "react";
import "./CSS/Fretboard.css";
import { Container, Col, Row } from "reactstrap";

export class Fretboard extends Component {
  render() {
    return (
      <Container className="fretboard-container">
        <Row className="fretboard">
          <Col className="fret first" />
          <Col className="fret" />
          <Col className="fret" />
          <Col className="fret">
            <div className="dot" />
          </Col>
          <Col className="fret" />
          <Col className="fret">
            <div className="dot" />
          </Col>
          <Col className="fret" />
          <Col className="fret">
            <div className="dot" />
          </Col>
          <Col className="fret" />
          <Col className="fret">
            <div className="dot" />
          </Col>
          <Col className="fret" />
          <Col className="fret" />
        </Row>
      </Container>
    );
  }
}

export default Fretboard;
