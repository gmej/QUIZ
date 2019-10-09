import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import {questions} from '../assets/mock';

import React from 'react';
import App from '../components/App.jsx';

let initialState = {
    score: 0,
    finished: false,
    currentQuestion: 0,
    questions: [ ...questions ]
};

export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = initialState;
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <div style={{ height: '100%' }}>
                    <App store={this.store} />
                </div>
            </Provider>
        );
    }

    configureStore() {
        return createStore(GlobalState, this.initialState);
    }
}