import React from 'react';
import Button from './Button';

const buttonStyle = {
    backgroundColor: 'light-red',
    color: 'black'
}

export default class ButtonReset extends Button {
    constructor(props){
        super(props);
        this.onReset = this.onReset.bind(this);
    }

    onReset() {
        this.props.onReset();
    }
    render() {
        return (
            <button
                onClick={this.onReset}
                style={buttonStyle}>
                Reset Game
            </button>
        );
    }
}


