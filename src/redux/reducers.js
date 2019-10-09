import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS } from './actions';

function scoreReducer(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            console.log('action => ', action);

            let score = 0;
            action.payload.questions.map((question, index) => {
                if (question.answer === question.userAnswer) {
                    score++;
                }
            })
            return state = score;
        default:
            return state;
    }
}

function finishedReducer(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return state = true;
        default:
            return state;
    }
}
function currentQuestionReducer(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return state = action.payload.direction === 'Next question' ?
                action.payload.currentQuestion + 1 :
                action.payload.currentQuestion - 1
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

        default:
            return state;
    }
}



const GlobalState = (combineReducers({
    score: scoreReducer,
    finished: finishedReducer,
    currentQuestion: currentQuestionReducer,
    questions: questionsReducer
}));

export default GlobalState;