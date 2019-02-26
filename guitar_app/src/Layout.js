import React, { Component } from 'react'

export class Layout extends Component {
    render() {
        return (
            <div>
                <h1>Guitar Fretboard</h1>

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
                
                <ul class="dots">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <ul class="strings">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>            
            </div>
        )
    }
}

export default Layout
