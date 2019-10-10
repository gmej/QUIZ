import React from 'react';
import ButtonChangeQuestion from './ButtonChangeQuestion';
import ButtonSubmit from './ButtonSubmit';
import QuestionsIndexes from './QuestionsIndexes';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../assets/style/Game.css';
import Tips from './Tips';

/* import PropTypes from 'prop-types';
 */

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        //this.textChange = this.textChange.bind(this);
        this.onSubmitPress = this.onSubmitPress.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
        this.onTimeCountChange = this.onTimeCountChange.bind(this);
    }

    onSubmitPress() {
        this.props.onSubmitPress();
    }

    /* textChange(text) {
        this.props.appTextChange(text);
    } */

    changeQuestion(index) {
        this.props.changeQuestion(index);
    }

    onTimeCountChange() {
        this.props.onTimeCountChange();
    }

    render() {
        return (
            <div>
                <Container className="card" style={{ height: '100%', width: '100%', position: 'relative', right: 0, top: 0 }}>
                    <div className="question">
                        <Row><p>QUESTION: <b>{this.props.question.question}</b></p>
                            <Image src={this.props.question.attachment.url} fluid alt={this.props.question.attachment.filename} />
                            <Tips tips={this.props.question.tips} />
                        </Row>
                    </div>
                </Container>
                <Container className="card">
                    <div className="options">
                        <Row>
                            <input type="text"
                                placeholder="Type your answer here "
                                value={this.props.question.userAnswer || ""}
                                onChange={(e) => {
                                    this.props.onQuestionAnswer(e.target.value);
                                }} />
                            <ButtonSubmit onSubmitPress={this.onSubmitPress} />
                            <ButtonChangeQuestion
                                changeQuestion={this.changeQuestion}
                                direction={'Previous question'}
                                disable={this.props.firstQuestion}
                                targetQuestionId={this.props.currentQuestion-1} />
                            <ButtonChangeQuestion
                                changeQuestion={this.changeQuestion}
                                direction={'Next question'}
                                disable={this.props.lastQuestion}
                                targetQuestionId={this.props.currentQuestion+1} />
                        </Row>
                    </div>
                    <div>
                        <QuestionsIndexes
                            availableQuestions={this.props.availableQuestions}
                            onQuestionSelect={this.changeQuestion} />
                    </div>
                </Container>
                <Container>

                </Container>
            </div>

        );
    }
}

