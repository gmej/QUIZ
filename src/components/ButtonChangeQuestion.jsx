import React from 'react';
import Button from './Button';
const buttonStyle = {
    color: 'green'
}

export default class ButtonChangeQuestion extends Button {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click(){
        this.props.changeQuestion(this.props.targetQuestionId);
    }
    render() { 
        return (
            <button disabled={this.props.disable} style={buttonStyle} onClick={this.click}> {this.props.direction} </button>
        );
    }
}