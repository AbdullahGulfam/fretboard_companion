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
                  ["A", "A"],
                  ["A#", "A#"],
                  ["B", "B"],
                  ["C", "C"],
                  ["C#", "C#"],
                  ["D", "D"],
                  ["D#", "D#"],
                  ["E", "E"],
                  ["F", "F"],
                  ["F#", "F#"],
                  ["G", "G"],
                  ["G#", "G#"]
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
                  ["Minor Harmonic", [2, 1, 2, 2, 1, 3]]
                ]}
              />
            </Col>
          </Row>
        </Container>
        <Fretboard />
        <Container className="strings">
          <String
            stringTuning="E"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="B"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="G"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="D"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="A"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
          <String
            stringTuning="E"
            stringRoot={this.state.scaleRoot}
            stringStruct={this.state.scaleStruct}
          />
        </Container>
      </div>
    );
  }
}

export default Layout;
