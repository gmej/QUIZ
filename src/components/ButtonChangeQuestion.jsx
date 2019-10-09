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
        console.log('this.props.direction :', this.props.direction);
        this.props.changeQuestion(this.props.direction);
    }
    render() { 
        return (
            <button disabled={this.props.disable} style={buttonStyle} onClick={this.click}> {this.props.direction} </button>
        );
    }
}