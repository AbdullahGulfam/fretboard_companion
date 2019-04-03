import React, { Component } from 'react'
import './CSS/Fretboard.css'

export class Fretboard extends Component {
    render() {
        return (
        <div id="fretboard">
            <div id="frets">
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
                <div className="fret"></div>
            </div>

            <ul id="dots">
			    <li className="dot"></li>
			    <li className="dot"></li>
			    <li className="dot"></li>
			    <li className="dot"></li>
		    </ul>
        </div>
        )
    }
}

export default Fretboard
