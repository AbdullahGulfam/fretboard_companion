import React, { Component } from 'react'
import './CSS/DropdownMenu.css'

export class DropdownMenu extends Component {
    render() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
        const options = [];

        for (const[value] of notes.entries()) {
            options.push(<li className="dd-list-item">{value}</li>);
        }

        return (
            
            <div className="menu">
                <div className="dd-wrapper">
                    <div className="dd-header">
                        <div className="dd-header-title">
                        </div>
                    </div>

                    <ul className="dd-list">
                        {options}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DropdownMenu
