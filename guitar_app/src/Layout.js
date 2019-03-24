import React, { Component } from 'react'
import Fretboard from './Fretboard'
import String from './String'
import './CSS/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div class="main">
                <h1>Fretboard Companion</h1>
                <Fretboard /> 
                    
                <ul class="strings">
                    <String />
                    <String />
                    <String />
                    <String />
                    <String />
                    <String />
                </ul>
            </div>
        )
    }
}

export default Layout
