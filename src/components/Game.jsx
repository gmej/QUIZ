import React from 'react';
import ButtonChangeQuestion from './ButtonChangeQuestion';
import ButtonSubmit from './ButtonSubmit';
import QuestionsIndexes from './QuestionsIndexes';
import { Container, Row, Image } from 'react-bootstrap';
import '../assets/style/Game.css';
import Tips from './Tips';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.onSubmitPress = this.onSubmitPress.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
        this.onTimeCountChange = this.onTimeCountChange.bind(this);
    }

    onSubmitPress() {
        this.props.onSubmitPress();
    }

    changeQuestion(index) {
        this.props.changeQuestion(index);
    }

    onTimeCountChange() {
        this.props.onTimeCountChange();
    }

    render() {
        let questionImageUrl = null;
        let authorImageUrl = null;
        try {
            questionImageUrl = this.props.question.attachment.url;
        } catch (e) { }
        try {
            authorImageUrl = this.props.question.author.photo.url;
        } catch (e) { }
        return (
            <div className="game">
                <Container className="card">
                    <div className="question">
                        <p>QUESTION: <b>{this.props.question.question}</b></p>
                    </div>
                    <div className="options">
                        <div>
                            <input type="text"
                                placeholder="Type your answer here "
                                value={this.props.question.userAnswer || ""}
                                onChange={(e) => {
                                    this.props.onQuestionAnswer(e.target.value);
                                }} />
                        </div>
                        <div>
                            <ButtonSubmit onSubmitPress={this.onSubmitPress} />
                        </div>
                        <div>

                            <ButtonChangeQuestion
                                changeQuestion={this.changeQuestion}
                                direction={'Previous question'}
                                disable={this.props.firstQuestion}
                                targetQuestionId={this.props.currentQuestion - 1} />
                            <ButtonChangeQuestion
                                changeQuestion={this.changeQuestion}
                                direction={'Next question'}
                                disable={this.props.lastQuestion}
                                targetQuestionId={this.props.currentQuestion + 1} />
                        </div>
                    </div>
                    <div>
                        <QuestionsIndexes
                            availableQuestions={this.props.availableQuestions}
                            onQuestionSelect={this.changeQuestion} />
                    </div>
                    <Tips tips={this.props.question.tips} />
                </Container>
                <Container className="questionImage">

                    {questionImageUrl != null &&
                        <Image src={this.props.question.attachment.url} fluid alt={this.props.question.attachment.filename} />
                    }
                </Container>
                <Container className="card">
                        <div>Autor: <b>{this.props.question.author.username}</b></div>
                        <div>
                            {authorImageUrl != null &&
                                <div className="thumbnail">
                                    < Image src={this.props.question.author.photo.url} thumbnail />
                                </div>
                            }
                        </div>
                </Container>
            </div>

        );
    }
}

