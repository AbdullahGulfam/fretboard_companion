import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export class CustomDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownOptions: props.options,
      dropdownText: props.title,
      dropdownValue: []
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  update = option => {
    this.setState({
      dropdownText: option.currentTarget.textContent,
      dropdownValue: option.currentTarget.value
    });
  };

  render() {
    return (
      <div className="customdropdown">
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
            {this.state.dropdownOptions.map(([key, value]) => {
              return (
                <DropdownItem value={value} onClick={this.update}>
                  {key}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default CustomDropdown;
