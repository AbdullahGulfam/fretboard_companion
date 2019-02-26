import React from 'react';
import ReactDOM from 'react-dom';
import Scale from './Scale';

const scaleTest = <Scale scaleRoot='c' scaleForm={[2,2,1,2,2,2]} />

ReactDOM.render(scaleTest, document.getElementById('root'));