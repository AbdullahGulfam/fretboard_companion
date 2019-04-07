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

    this.state = {
      dropdownOpen: false,
      notes: ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"]
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

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
            style={{
              backgroundColor: "#663300",
              border: "#663300",
              color: "white"
            }}
          >
            {" "}
            Scale Root Note{" "}
          </DropdownToggle>

          <DropdownMenu>
            {this.state.notes.map(note => (
              <DropdownItem>{note}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default NoteDropdown;
