export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';

export function questionAnswer(index, answer) {
    console.log('question answer!');
    return { type: QUESTION_ANSWER, payload: { index, answer } };
}
export function submit(questions) {
    console.log('submit!');
    return { type: SUBMIT, payload: { questions } };
}

export function changeQuestion(currentQuestion, direction){
    return { type: CHANGE_QUESTION, payload: { currentQuestion, direction } };

}
export function initQuestions(questions) {
    console.log('init questions!')    
    return { type: INIT_QUESTIONS, payload: { questions } };
}