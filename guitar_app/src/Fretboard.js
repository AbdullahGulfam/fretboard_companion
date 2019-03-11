import React, { Component } from 'react'
import './CSS/Fretboard.css'

export class Fretboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div class="fretboard">
            <div></div>
            <div></div>
            <div></div>
            <div class="dotted"></div>
            <div></div>
            <div class="dotted"></div>
            <div></div>
            <div class="dotted"></div>
            <div></div>
            <div class="dotted"></div>
            <div></div>
            <div></div>
        </div>
        )
    }
}

export default Fretboard
