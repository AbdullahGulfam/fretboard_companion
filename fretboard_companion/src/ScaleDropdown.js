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
    this.changeText = this.changeText.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownText: "Scale Type",
      scales: ["Major", "Minor Natural", "Minor Harmonic", "Minor Melodic"]
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeText = scale => {
    this.setState({
      dropdownText: scale.currentTarget.textContent
    });
  };

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
            {this.state.scales.map(scale => {
              return (
                <DropdownItem onClick={this.changeText}>{scale}</DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ScaleDropdown;
