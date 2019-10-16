import React from 'react';
import '../assets/style/App.css';

import { Card } from 'react-bootstrap';
/* const buttonStyle = {
    color: 'green'
} */


export default class Tips extends React.Component {
    render() {
        let tips = this.props.tips;
        let pistas = tips.map((tip, index) => {
            return (
                <Card border="info" class="tips" key={index} style={{width: '18rem', height:'4rem'}}>{tip}</Card>
            )
        });
        return (
            <div>{pistas}</div>
        )
    }
}