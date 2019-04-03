import React, { Component } from 'react'
import Fretboard from './Fretboard'
import String from './String'
import Menu from './Menu'
import './CSS/Layout.css'

export class Layout extends Component {
    render() {
        return (
            <div id="main">
                <h1 id="title">Fretboard Companion</h1>
                
                {/*<h1 id="scaleName">C Major Scale</h1>
                <Fretboard />    

                <div id="strings"> 
                    <String stringTuning='e' scaleNotes={['c','d','e','f','g','a','b']}/>
                    <String stringTuning='b' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='g' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='d' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='a' scaleNotes={['c','d','e','f','g','a','b']}/>   
                    <String stringTuning='e' scaleNotes={['c','d','e','f','g','a','b']}/>   
                </div> */}  

                
            </div>
        )
    }
}

export default Layout
                                                                     