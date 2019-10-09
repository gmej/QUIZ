import React from 'react';

const buttonStyle = {
    color: 'red',
}

export default class Button extends React.Component {
    render() { 
        return (
            <button style={buttonStyle}> {this.props.buttonType}</button>
        );
    }
}