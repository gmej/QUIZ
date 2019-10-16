import React from 'react';
import Menu from './Menu.jsx';

export default class Homepage extends React.Component {

    render() {
        <view style={{
            flexDirection='column',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <div style={{ flex: 1 }}>WELCOME TO THE QUIZ</div>
            <Menu />
        </view>
    }
}