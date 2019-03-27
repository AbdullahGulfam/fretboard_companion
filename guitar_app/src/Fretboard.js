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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <ul class="dots">
			    <li></li>
			    <li></li>
			    <li></li>
			    <li></li>
		    </ul>
        </div>
        )
    }
}

export default Fretboard
