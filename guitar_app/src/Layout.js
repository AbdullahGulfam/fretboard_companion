import React, { Component } from 'react'
import Fretboard from './Fretboard'
import String from './String'
import './CSS/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div class="main">
                <h1>Guitar Fretboard</h1>
                <Fretboard /> 
                    
                <ul class="strings">
                    <String stringTuning = 'e'/>
                    <String stringTuning = 'a'/>
                    <String stringTuning = 'd'/>
                    <String stringTuning = 'g'/>
                    <String stringTuning = 'b'/>
                    <String stringTuning = 'e'/>
                </ul>
            </div>
        )
    }
}

export default Layout
