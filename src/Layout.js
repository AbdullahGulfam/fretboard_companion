import React, { Component } from "react";
import Fretboard from "./Fretboard";
import String from "./String";
import CustomDropdown from "./CustomDropdown";
import "./CSS/Layout.css";
import { Container, Row, Col } from "reactstrap";
export class Layout extends Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);

    this.state = {
      scaleRoot: "",
      scaleStruct: []
    };
  }

  update() {
    this.setState({
      scaleRoot: "",
      scaleStruct: ""
    });
  }

  render() {
    return (
      <div className="main">
        <h1 className="title">Fretboard Companion</h1>
        <Container className="dropdowns">
          <Row>
            {/*<Col>
              <CustomDropdown
                title="Scale Root Note"
                options={[
                  "A",
                  "A#",
                  "B",
                  "C",
                  "C#",
                  "D",
                  "D#",
                  "E",
                  "F",
                  "F#",
                  "G",
                  "G#"
                ]}
              />
              </Col>*/}
            <Col>
              <CustomDropdown
                title="Scale Type"
                options={[
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
