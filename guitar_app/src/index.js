import React from 'react';
import ReactDOM from 'react-dom';
import String from './String';
import Scale from './Scale';
import Fret from './Fret.js'


const stringTest = <String stringTuning='e' stringNumber="1"/>;
const scaleTest = <Scale scaleRoot='c' scaleForm={[2,2,1,2,2,2]} />
const fretTest = <Fret fretNumber={1} stringTuning='e'/>

ReactDOM.render(scaleTest, document.getElementById('root'));