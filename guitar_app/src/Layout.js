import React, { Component } from 'react'
import Fretboard from './Fretboard'
import './CSS/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div>
                <h1>Guitar Fretboard</h1>
                <Fretboard />     
            </div>
        )
    }
}

export default Layout
