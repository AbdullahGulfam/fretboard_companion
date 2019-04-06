import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

export class Scale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notesString: [],
      notesScale: []
    };
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.notesString.map(note =>
            this.state.notesScale.includes(note, 0) ? (
              <Col>
                <div key={note} className="note">
                  {note}
                </div>
              </Col>
            ) : (
              <Col>
                <div style={{ opacity: 0.0 }} key={note} className="note" />
              </Col>
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

    let scaleNotes = [this.props.scaleRoot];
    let scaleNotesIndex = notes.indexOf(this.props.scaleRoot);
    let i = 0;
    while (i < 6) {
      scaleNotesIndex += this.props.scaleForm[i];
      if (scaleNotesIndex >= notes.length) {
        scaleNotesIndex = scaleNotesIndex % notes.length;
      }
      scaleNotes.push(notes[scaleNotesIndex]);
      i++;
    }
    this.setState({ notesScale: scaleNotes });
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
    let stringNotes = [];

    let i = notes.indexOf(this.props.stringTuning) + 1;
    while (stringNotes.length < 11) {
      stringNotes.push(notes[i % notes.length]);
      i++;
    }
    this.setState({ notesString: stringNotes });
  }
}
export default Scale;
