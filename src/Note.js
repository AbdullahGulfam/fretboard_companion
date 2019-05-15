import React, { Component } from "react";
import "./CSS/Note.css";

export class Note extends Component {
  render() {
    return (
      <div className="note" style={this.props.color}>
        {this.props.noteName}
      </div>
    );
  }
}

export default Note;
