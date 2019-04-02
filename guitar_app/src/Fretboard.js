import React, { Component } from 'react'
import './CSS/Fretboard.css'

export class Fretboard extends Component {
    render() {
        return (
        <div className="fretboard">
            <div className="frets">
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

            <ul className="dots">
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
