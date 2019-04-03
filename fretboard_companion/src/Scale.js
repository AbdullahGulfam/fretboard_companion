import React, { Component } from 'react'

export class Scale extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes:[]
        };
    }
    
    render() {
        return (
            <div>
                
            </div>
        )

    }

    componentDidMount() {
        this.getScaleNotes();
    }

    getScaleNotes() {
        const notes = ['a','a#','b','c','c#','d','d#','e','f','f#','g','g#'];

        let scaleList = [this.props.scaleRoot];
        let scaleListIndex = notes.indexOf(this.props.scaleRoot);
        let i = 0;
        while (i < 6) {
            scaleListIndex += this.props.scaleForm[i];
            if (scaleListIndex >= notes.length) {
                scaleListIndex = (scaleListIndex % notes.length);
            }
            scaleList.push(notes[scaleListIndex]);
            i++;
        }
        this.setState({ notes: scaleList });   
    }
}
export default Scale
