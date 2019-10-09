import React from 'react';

import '../assets/style/App.css';

import { connect } from 'react-redux';
import Game from './Game';
import Box from './Box';
import { questionAnswer, submit, changeQuestion, initQuestions } from '../redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.appTextChange = this.appTextChange.bind(this);
    this.onSubmitPress = this.onSubmitPress.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.backCount();
  }


  backCount() {
    this.timeout = setTimeout(() => {
      this.props.dispatch(submit(this.props.questions));
    }, 1000*1000);
  }

  appTextChange(text) {
    this.props.dispatch(questionAnswer(this.props.currentQuestion, text));
  }

  onSubmitPress() {
    this.props.dispatch(submit(this.props.questions));
  }

  changeQuestion(direction) {
    this.props.dispatch(changeQuestion(this.props.currentQuestion, direction));
  }


  render() {
    if (!this.props.finished) {
      return (
        <div className="container" >
          <Game question={this.props.questions[this.props.currentQuestion]}
            appTextChange={this.appTextChange}
            onQuestionAnswer={(answer) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
            }}
            onSubmitPress={this.onSubmitPress}
            changeQuestion={this.changeQuestion}
            firstQuestion={this.props.currentQuestion === 0}
            lastQuestion={this.props.currentQuestion === this.props.questions.length - 1}
          //finished={this.props.finished}
          />
        </div>
      );
    } else {
      return (
        <div className="container" >
          <Box score={this.props.score} currentQuestion={this.props.currentQuestion} />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
