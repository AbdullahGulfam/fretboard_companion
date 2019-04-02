import React, { Component } from 'react'
import './CSS/String.css'
import Scale from './Scale'

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
            <div className="string">
                <div>
                    {
                        this.props.scaleNotes.includes(this.props.stringTuning, 0) ?
                        <div className="firstNote"> {this.props.stringTuning} </div> : <div style={{opacity: 0.0}} className="firstNote"> {this.props.stringTuning} </div>
                    }
                </div>
                <ul className="notes">
                    {     
                        this.state.notes.map((note) => this.props.scaleNotes.includes(note, 0) ?
                        (<li key={note} className="note">{note}</li>) : (<li style={{opacity: 0.0}} key={note} className="note">test</li>))
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.getStringNotes();
    }

    getStringNotes() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];
        let stringNotes = [];

        let i = notes.indexOf(this.props.stringTuning) + 1;
        while (stringNotes.length < 11) {
            stringNotes.push(notes[i % notes.length]);
            i++;
        }
        this.setState({ notes: stringNotes});
    }
}

export default String
