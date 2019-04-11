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
    this.changeText = this.changeText.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownTitle: props.title,
      dropdownOptions: props.options
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  changeText = option => {
    this.setState({
      dropdownTitle: option.currentTarget.textContent
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
            {this.state.dropdownTitle}{" "}
          </DropdownToggle>

          <DropdownMenu>
            {this.state.dropdownOptions.map(option => {
              return (
                <DropdownItem onClick={this.changeText}>{option}</DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default CustomDropdown;
