import React from 'react';
import ButtonChangeQuestion from './ButtonChangeQuestion';
import ButtonSubmit from './ButtonSubmit';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../assets/style/Game.css';
import Tips from './Tips';

/* import PropTypes from 'prop-types';
 */

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        //this.textChange = this.textChange.bind(this);
        this.changeQuestion = this.changeQuestion.bind(this);
        this.onSubmitPress = this.onSubmitPress.bind(this);
    }

    onSubmitPress() {
        this.props.onSubmitPress();
    }

    /* textChange(text) {
        this.props.appTextChange(text);
    } */

    changeQuestion(direction) {
        this.props.changeQuestion(direction);
    }

    render() {
        console.log('this.props :', this.props);
        return (
                <div>
                        <Container  className="card" style={{ height: '100%', width: '100%', position: 'relative', right: 0, top: 0 }}>
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
                                        placeholder="Type your answe"
                                        value={this.props.question.userAnswer || ""}
                                        onChange={(e) => {
                                            this.props.onQuestionAnswer(e.target.value);
                                        }} />
                                    <ButtonSubmit onSubmitPress={this.onSubmitPress} />
                                    <ButtonChangeQuestion
                                        changeQuestion={this.changeQuestion}
                                        direction={'Previous question'}
                                        disable={this.props.firstQuestion} />
                                    <ButtonChangeQuestion
                                        changeQuestion={this.changeQuestion}
                                        direction={'Next question'}
                                        disable={this.props.lastQuestion}
                                    />
                                </Row>
                            </div>
                        </Container>
                        <Container>
                            
                        </Container>
                </div>

        );
    }


    onChangeQuestion = (index) => {
        this.props.dispatch(this.changeQuestion(this.props.currentQuestion))
    }
}

/* Game.PropTypes = {

} */