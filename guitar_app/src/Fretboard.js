import React, { Component } from 'react'
import './CSS/Fretboard.css'

export class Fretboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div class="fretboard">
            <div class="frets">
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
                <div class="fret"></div>
            </div>

            <ul class="dots">
			    <li class="dot"></li>
			    <li class="dot"></li>
			    <li class="dot"></li>
			    <li class="dot"></li>
		    </ul>
        </div>
        )
    }
}

export default Fretboard
