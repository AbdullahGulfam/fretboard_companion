import React, { Component } from 'react'
import './CSS/String.css'

export class String extends Component {
    constructor(props)
    {
        super(props);

        this.state= {
            notes: []
        };
    }
    render() {
        return (
            <div class="string">
                <ul class="notes">
                    {this.state.notes.map((note) => 
                    <li class="note">{note}</li>)}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.getStringNotes();
    }

    getStringNotes() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
        let stringNotes = [this.props.stringTuning];

        let i = notes.indexOf(this.props.stringTuning) + 1;
        while (stringNotes.length < 12) {
            stringNotes.push(notes[i % notes.length]);
            i++;
        }
        this.setState({ notes: stringNotes});
    }
}

export default String
