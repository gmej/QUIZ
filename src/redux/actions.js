export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
//export const TIMEOUT = 'TIMEOUT';
export const TIMER_REFRESH = 'TIMER_REFRESH';
export const IS_FETCHING = 'IS_FETCHING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const TIMEOUT_START = 'TIMEOUT_START';


const MY_TOKEN = '170928d0aade25dc7cc5';


export function questionAnswer(index, answer) {
    console.log('question answer!');
    return { type: QUESTION_ANSWER, payload: { index, answer } };
}
export function submit(questions) {
    console.log('submit!');
    return { type: SUBMIT, payload: { questions } };
}
/* export function timeout(questions) {
    console.log('timeout!');
    return { type: TIMEOUT, payload: { questions } };
} */

export function changeQuestion(index) {
    return { type: CHANGE_QUESTION, payload: { index } };
}

export function timerRefresh(timeLeft) {
    return { type: TIMER_REFRESH, payload: { timeLeft } };
}

export function fetchQuestions(isFetching) {
    console.log('fetchQuestions action!')
    return { type: IS_FETCHING, payload: { isFetching } }
}

export function initQuestions(questions) {
    console.log('initQuestions action!');
    return { type: INIT_QUESTIONS, payload: { questions } };
}
export function fetchError(error) {
    return { type: FETCH_ERROR, payload: { error } }
}

export function startTimeout() {
    return { type: TIMEOUT_START }
}


export function fetchDataFromServer() {
    return dispatch => {
        dispatch(fetchQuestions(true));
        return fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=' + MY_TOKEN)
            .then((response) => {
                if (!response.ok) {
                    console.log('error fetching');
                    throw Error(response);
                }
                return response;
            }).then((response) => response.json())
            .then((questions) => {
                if (questions.length <= 0) {
                    console.log('**************REINTENTANDO FETCH DATA FROM SERVER**************');
                    dispatch(fetchDataFromServer());
                    return;
                }
                dispatch(initQuestions(questions));
                dispatch(fetchQuestions(false));
            })
            .catch((error) => {
                console.log('error fetchDataFromServer:', error);
                dispatch(fetchError(error))
            });
    }
}

/* export function timeout() {
    return { type: TIMEOUT, payload: {  } };
} */