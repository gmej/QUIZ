import React from 'react';
import { Card } from 'react-bootstrap';
/* const buttonStyle = {
    color: 'green'
} */

export default class Tips extends React.Component {
    render() {
        let tips = this.props.tips;
        let pistas = tips.map((tip, index) => {
            return(
                <Card key={index} body>{tip}</Card>
            )
        });
        return (
            <div>{pistas}</div>
        )
    }
}