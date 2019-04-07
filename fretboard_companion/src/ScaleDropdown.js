import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export class ScaleDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdownOpen: false,
      scales: ["Major", "Minor Natural", "Minor Harmonic", "Minor Melodic"]
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="scaledropdown">
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
            Scale Type{" "}
          </DropdownToggle>

          <DropdownMenu>
            {this.state.scales.map(scale => (
              <DropdownItem>{scale}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ScaleDropdown;
