import React, { Component } from 'react'

export class Fret extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            
        </div>
        )
    }

    getFretNote() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#']
        var index = this.props.stringTuning + this.props.fretNumber;

        return notes[(index % notes.length)];
    }
}

export default Fret
