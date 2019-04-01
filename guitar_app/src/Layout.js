import React, { Component } from 'react'
import Fretboard from './Fretboard'
import String from './String'
import './CSS/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div className="main">
                <h1>Fretboard Companion</h1>
                <Fretboard />    
                 
                <div className="strings"> 
                    <String stringTuning='e'/>
                    <String stringTuning='b'/>   
                    <String stringTuning='g'/>   
                    <String stringTuning='d'/>   
                    <String stringTuning='a'/>   
                    <String stringTuning='e'/>   
                </div>   
            </div>
        )
    }
}

export default Layout
                                                                     