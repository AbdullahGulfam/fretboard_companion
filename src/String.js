import React, { Component } from "react";
import "./CSS/String.css";
import { Container, Col, Row } from "reactstrap";
import Note from "./Note";

export class String extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const noteColor = {
      background: "#ffffff"
    };

    const noteColorRoot = {
      background: "#dcbab5"
    };

    return (
      <Container className="string-container">
        <Row className="string-row">
          <Col className="string open">
            {this.getScaleNotes().includes(this.props.stringTuning, 0) ? (
              [
                this.props.stringRoot == this.props.stringTuning ? (
                  <Note
                    noteName={
                      this.getScaleNotes().indexOf(this.props.stringTuning) +
                      1 +
                      ":" +
                      this.props.stringTuning
                    }
                    color={noteColorRoot}
                  />
                ) : (
                  <Note
                    noteName={
                      this.getScaleNotes().indexOf(this.props.stringTuning) +
                      1 +
                      ":" +
                      this.props.stringTuning
                    }
                    color={noteColor}
                  />
                )
              ]
            ) : (
              <div />
            )}
          </Col>
          {this.getStringNotes().map(note =>
            this.getScaleNotes().includes(note, 0) ? (
              [
                this.props.stringRoot == note ? (
                  <Col className="string" key={note}>
                    <Note
                      noteName={
                        this.getScaleNotes().indexOf(note) + 1 + ":" + note
                      }
                      color={noteColorRoot}
                    />
                  </Col>
                ) : (
                  <Col className="string" key={note}>
                    <Note
                      noteName={
                        this.getScaleNotes().indexOf(note) + 1 + ":" + note
                      }
                      color={noteColor}
                    />
                  </Col>
                )
              ]
            ) : (
              <Col className="string" key={note} />
            )
          )}
        </Row>
      </Container>
    );
  }

  getScaleNotes() {
    const notes = [
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
    ];

    let scale = [];
    if (this.props.stringRoot !== "") {
      let scaleIndex = notes.indexOf(this.props.stringRoot);
      for (let i = 0; i < 7; i++) {
        if (scaleIndex >= notes.length) {
          scaleIndex = scaleIndex % notes.length;
        }
        scale.push(notes[scaleIndex]);
        scaleIndex += this.props.stringStruct[i];
      }
    }

    return scale;
  }

  getStringNotes() {
    const notes = [
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
    ];
    let string = [];
    let i = notes.indexOf(this.props.stringTuning) + 1;
    while (string.length < 11) {
      string.push(notes[i % notes.length]);
      i++;
    }
    return string;
  }
}
export default String;
