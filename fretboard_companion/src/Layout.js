import React, { Component } from "react";
import Fretboard from "./Fretboard";
import String from "./String";
import NoteDropdown from "./NoteDropdown";
import ScaleDropdown from "./ScaleDropdown";
import "./CSS/Layout.css";
import { Container, Row, Col } from "reactstrap";

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scaleRoot: "",
      scaleStruct: []
    };
  }
  render() {
    return (
      <div className="main">
        <h1 className="title">Fretboard Companion</h1>
        <Container className="dropdowns">
          <Row>
            <Col>
              <NoteDropdown />
            </Col>
            <Col>
              <ScaleDropdown />
            </Col>
          </Row>
        </Container>
        <Fretboard />
        <Container className="strings">
          <String
            stringTuning="e"
            scaleRoot={this.state.scaleRoot}
            scaleStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="b"
            scaleRoot={this.state.scaleRoot}
            scaleStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="g"
            scaleRoot={this.state.scaleRoot}
            scaleStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="d"
            scaleRoot={this.state.scaleRoot}
            scaleStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="a"
            scaleRoot={this.state.scaleRoot}
            scaleStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="e"
            scaleRoot={this.state.scaleRoot}
            scaleStruct={this.state.scaleStruct}
          />
        </Container>
      </div>
    );
  }
}

export default Layout;
