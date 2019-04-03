import React, { Component } from 'react'
import './CSS/Menu.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export class Menu extends Component {
    render() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
        const options = [];

        for (const[index, value] of notes.entries()) {
            options.push(<Dropdown.Item href="" key={index}>{value}</Dropdown.Item>);
        }

        return (
            
            <div className="menu">
                <DropdownButton id="dropdown-button" title="Select root note">
                    {options}
                </DropdownButton>
            </div>
        )
    }
}

export default Menu
