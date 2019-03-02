import React, { Component } from 'react'

export class Fret extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { this.getFretNote() }
            </div>
        )
    }

    getFretNote() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#']
        let index = notes.indexOf(this.props.stringTuning) + this.props.fretNumber;

        return notes[index % notes.length];
    }
}

export default Fret
