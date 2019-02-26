import React, { Component } from 'react'

export class String extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
        <div>
            {this.props.stringNumber} : {this.props.stringTuning}
        </div>
        )
    }

    getStringTuning() {
        return this.props.stringTuning;
    }
}

export default String
