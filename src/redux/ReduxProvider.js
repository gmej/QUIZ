
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';

//import { questions } from '../assets/mock';
import GlobalState from './reducers';

import App from '../components/App.jsx';


export default class ReduxProvider extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            score: 0,
            finished: false,
            currentQuestion: 0,
            questions: [],
            availableQuestions: [],
            timeLeft: 10,
            fetching: false,
            fetchError: null,
            isResetting: false
        };
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
        return createStore(GlobalState, applyMiddleware(thunkMiddleware));
    }
}