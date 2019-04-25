import React, { Component } from "react";
import Fretboard from "./Fretboard";
import String from "./String";
import CustomDropdown from "./CustomDropdown";
import "./CSS/Layout.css";
import { Container, Row, Col } from "reactstrap";
export class Layout extends Component {
  constructor(props) {
    super(props);

    this.updateRoot = this.updateRoot.bind(this);
    this.updateStruct = this.updateStruct.bind(this);

    this.state = {
      scaleRoot: "",
      scaleStruct: []
    };
  }

  updateRoot(value) {
    this.setState({
      scaleRoot: value
    });
  }

  updateStruct(value) {
    this.setState({
      scaleStruct: value
    });
  }

  render() {
    return (
      <div className="main">
        <h1 className="title">Fretboard Companion</h1>
        <Container className="dropdowns">
          <Row>
            <Col>
              <CustomDropdown
                updateParent={this.updateRoot.bind(this)}
                title="Scale Root Note"
                options={[
                  ["Scale Root Note", ""],
                  ["A", "a"],
                  ["A#", "a#"],
                  ["B", "b"],
                  ["C", "c"],
                  ["C#", "c#"],
                  ["D", "d"],
                  ["D#", "d#"],
                  ["E", "e"],
                  ["F", "f"],
                  ["F#", "f#"],
                  ["G", "g"],
                  ["G#", "g#"]
                ]}
              />
            </Col>
            <Col>
              <CustomDropdown
                updateParent={this.updateStruct.bind(this)}
                title="Scale Type"
                options={[
                  ["Scale Type", []],
                  ["Major", [2, 2, 1, 2, 2, 2]],
                  ["Minor Natural", [2, 1, 2, 2, 1, 2]],
                  ["Minor Harmonic", [2, 1, 2, 2, 3, 1]],
                  ["Minor Melodic", [2, 1, 2, 2, 2, 2]]
                ]}
              />
            </Col>
          </Row>
        </Container>
        <Fretboard />
        <Container className="strings">
          <String
            stringTuning="e"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="b"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="g"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="d"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="a"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="e"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
        </Container>
      </div>
    );
  }
}

export default Layout;
