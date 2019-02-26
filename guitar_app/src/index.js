import React from 'react';
import ReactDOM from 'react-dom';
import String from './String';
import Scale from './Scale';

const stringOne = <String stringTuning="E" stringNumber="1"/>;

const scaleTest = <Scale scaleRoot='c' scaleForm={[2,2,1,2,2,2]} />

ReactDOM.render(scaleTest, document.getElementById('root'));