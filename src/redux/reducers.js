import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS, TIMER_REFRESH, IS_FETCHING, FETCH_ERROR, RESET } from './actions';

function scoreReducer(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            let score = 0;
            action.payload.questions.map((question, index) => {
                if (question.answer === question.userAnswer) {
                    score++;
                }
            })
            return state = score;
        case RESET:
            return state = 0
        default:
            return state;
    }
}

function finishedReducer(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return state = true;
        case RESET:
            return state = false;
        default:
            return state;
    }
}

function currentQuestionReducer(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return state = action.payload.index
        case RESET:
            return state = 0;
        default:
            return state;
    }
}

function questionsReducer(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ?
                        action.payload.answer : question.userAnswer
                }
            })
        case INIT_QUESTIONS:
            return state = action.payload.questions;
        default:
            return state;
    }
}


function availableQuestionsReducer(state = [], action = {}) {
    switch (action.type) {
        case INIT_QUESTIONS:
            return state = action.payload.questions.length;
        default:
            return state;
    }
}

function timeLeftReducer(state = 120, action = {}) {
    switch (action.type) {
        case TIMER_REFRESH:
            return state = state - 1;
        case RESET:
            return state = 120;
        default:
            return state;
    }
}

function fetchingReducer(state = false, action = {}) {
    switch (action.type) {
        case IS_FETCHING:
            return state = action.payload.isFetching;
        case RESET:
            return state = true;
        default:
            return state;
    }
}

function fetchErrorReducer(state = null, action = {}) {
    switch (action.type) {
        case FETCH_ERROR:
            return state = action.payload.error;
        case RESET:
            return state = null;
        default:
            return state;
    }
}

function isResettingReducer(state = false, action = {}) {
    switch (action.type) {
        case RESET:
            return state = true;
        case INIT_QUESTIONS:
            return state = false;
        default:
            return state;
    }
}


const GlobalState = (combineReducers({
    score: scoreReducer,
    finished: finishedReducer,
    currentQuestion: currentQuestionReducer,
    questions: questionsReducer,
    timeLeft: timeLeftReducer,
    fetching: fetchingReducer,
    fetchError: fetchErrorReducer,
    availableQuestions: availableQuestionsReducer,
    isResetting: isResettingReducer,
}));

export default GlobalState;