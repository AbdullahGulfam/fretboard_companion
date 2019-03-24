import React, { Component } from 'react'
import './CSS/String.css'

export class String extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div class="string">
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
                <div id="note"></div>
            </div>
        )
    }

    getStringNotes() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
        let stringNotes = [this.props.stringTuning];

        let i = notes.indexOf(this.props.stringTuning) + 1;
        while (stringNotes.length < 11) {
            stringNotes.push(notes[i % notes.length]);
            i++;
        }

        for (let i = 0; i < stringNotes.length; i++) {
            let stringDiv = document.getElementById("note" + i);
            let stringNote = document.createTextNode(stringNotes[i]);
            stringDiv.appendChild(stringNote);
        }
        return stringNotes;
    }
}

export default String
