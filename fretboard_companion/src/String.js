import React, { Component } from "react";
import "./CSS/String.css";
import { Container, Col, Row } from "reactstrap";

export class String extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    };
  }
  render() {
    return (
      <Container className="string-container">
        <Row className="string-row">
          <Col className="string open" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
          <Col className="string" />
        </Row>
      </Container>
    );
  }
}
export default String;
