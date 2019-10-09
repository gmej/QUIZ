import React from 'react';
import Button from './Button';

const buttonStyle = {
    color: 'blue'
}

export default class ButtonSubmit extends Button {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.onSubmitPress();
    }
    render() {
        return (
            <button
                onClick={this.onSubmit}
                style={buttonStyle}>
                Submit
            </button>
        );
    }
}