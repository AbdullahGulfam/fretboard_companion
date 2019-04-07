import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export class NoteDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeText = this.changeText.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownText: "Scale Root Note",
      notes: ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeText = note => {
    this.setState({
      dropdownText: note.currentTarget.textContent
    });
  };

  render() {
    return (
      <div className="notedropdown">
        <Dropdown
          style={{ border: "#663300" }}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
          size="lg"
        >
          <DropdownToggle
            caret
            style={{
              backgroundColor: "#663300",
              border: "#663300",
              color: "white",
              height: "50px",
              width: "200px"
            }}
          >
            {" "}
            {this.state.dropdownText}{" "}
          </DropdownToggle>

          <DropdownMenu>
            {this.state.notes.map(note => {
              return (
                <DropdownItem onClick={this.changeText}>{note}</DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default NoteDropdown;
