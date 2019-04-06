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
          <String
            stringTuning="e"
            scaleRoot="c"
            scaleStruct={[2, 2, 1, 2, 2, 2]}
          />
          <String
            stringTuning="b"
            scaleRoot="c"
            scaleStruct={[2, 2, 1, 2, 2, 2]}
          />
          <String
            stringTuning="g"
            scaleRoot="c"
            scaleStruct={[2, 2, 1, 2, 2, 2]}
          />
          <String
            stringTuning="d"
            scaleRoot="c"
            scaleStruct={[2, 2, 1, 2, 2, 2]}
          />
          <String
            stringTuning="a"
            scaleRoot="c"
            scaleStruct={[2, 2, 1, 2, 2, 2]}
          />
          <String
            stringTuning="e"
            scaleRoot="c"
            scaleStruct={[2, 2, 1, 2, 2, 2]}
          />
        </Container>
      </div>
    );
  }
}

export default Layout;
