import React, { Component } from 'react'
import Fretboard from './Fretboard'
import String from './String'
import Scale from './Scale'
import './CSS/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div className="main">
                <h1>Fretboard Companion</h1>

                <Fretboard />    

                <div className="strings"> 
                    <String stringTuning='e' scaleNotes={['c','d','e','f','g','a','b']}/>
                    <String stringTuning='b' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='g' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='d' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='a' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='e' scaleNotes={['c','d','e','f','g','a','b']}/>   
                </div>   
            </div>
        )
    }
}

export default Layout
                                                                     