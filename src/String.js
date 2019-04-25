import React, { Component } from "react";
import "./CSS/String.css";
import { Container, Col, Row } from "reactstrap";
import Note from "./Note";

export class String extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesString: [],
      notesScale: []
    };
  }

  render() {
    return (
      <Container className="string-container">
        <Row className="string-row">
          <Col className="string open">
            <Note noteName={this.props.stringTuning} />
          </Col>
          {this.state.notesString.map(note =>
            this.state.notesScale.includes(note, 0) ? (
              <Col className="string">
                {" "}
                <Note noteName={note} />
              </Col>
            ) : (
              <Col className="string" />
            )
          )}
        </Row>
      </Container>
    );
  }

  componentDidMount() {
    this.getScaleNotes();
    this.getStringNotes();
  }

  getScaleNotes() {
    const notes = [
      "a",
      "a#",
      "b",
      "c",
      "c#",
      "d",
      "d#",
      "e",
      "f",
      "f#",
      "g",
      "g#"
    ];

    let scale = [this.props.scaleRoot];
    let scaleIndex = notes.indexOf(this.props.scaleRoot);
    let i = 0;
    while (i < 6) {
      scaleIndex += this.props.scaleStruct[i];
      if (scaleIndex >= notes.length) {
        scaleIndex = scaleIndex % notes.length;
      }
      scale.push(notes[scaleIndex]);
      i++;
    }
    this.setState({ notesScale: scale });
  }

  getStringNotes() {
    const notes = [
      "a",
      "a#",
      "b",
      "c",
      "c#",
      "d",
      "d#",
      "e",
      "f",
      "f#",
      "g",
      "g#"
    ];
    let string = [];
    let i = notes.indexOf(this.props.stringTuning) + 1;
    while (string.length < 11) {
      string.push(notes[i % notes.length]);
      i++;
    }
    this.setState({ notesString: string });
  }
}
export default String;
