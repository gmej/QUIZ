import React from 'react';

export default class QuestionsIndexes extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    questionSelected() {
        this.props.changeQuestion(this.props.direction);
    }

    onClick(e) {
        this.props.onQuestionSelect(parseInt(e.target.id));
    }

    render() {
        let questions = [];
        for (let i = 0; i < this.props.availableQuestions; i++) {
            questions.push(
                <button  id={i} onClick={this.onClick}>{i + 1}</button>
            );
        }
        return (
            <div>{questions}</div>
        );
    }
}