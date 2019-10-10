import React from 'react';

import '../assets/style/App.css';

import { connect } from 'react-redux';
import Game from './Game';

import { questionAnswer, submit, changeQuestion, timerRefresh, timeout, fetchDataFromServer } from '../redux/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onTimeCountChange = this.onTimeCountChange.bind(this);
  }

  async componentDidMount() {
    this.props.dispatch(fetchDataFromServer());

  }


  onTimeCountChange() {
    console.log('this.props.timeLeft :', this.props.timeLeft);
    if (this.props.timeLeft <= 0) {
      this.props.dispatch(submit(this.props.questions));
      this.props.dispatch(timerRefresh(this.props.timeLeft));
    } else {
      this.props.dispatch(timerRefresh(this.props.timeLeft));
    }
  }

  render() {
    console.log('app render this.props', this.props)
    if (this.props.fetchError != null) {
      return (
        <div>error: {this.props.fetchError}</div>
      );
    } else if (this.props.fetching) {
      return (
        <div>Wait for server response...</div>
      );
    } else if (this.props.questions.length <= 0) {
      return (
        <div> Ninguna pregunta en el servidor!</div>
      )
    } else if (!this.props.finished) {
      return (
        <div className="container" >
          <Game question={this.props.questions[this.props.currentQuestion]}
            appTextChange={(text) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, text));
            }}
            onQuestionAnswer={(answer) => {
              this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
            }}
            onSubmitPress={() => {
              this.props.dispatch(submit(this.props.questions));
            }}
            changeQuestion={(index) => {
              this.props.dispatch(changeQuestion(index));
            }}
            firstQuestion={this.props.currentQuestion === 0}
            lastQuestion={this.props.currentQuestion === this.props.questions.length - 1}
            onTimeCountChange={this.onTimeCountChange}
            timeLeft={this.props.timeLeft}
            finished={this.props.finished}
            availableQuestions={this.props.availableQuestions}
            currentQuestion = {this.props.currentQuestion}
          />
          {/*           <TimeCount onTimeCountChange={this.onTimeCountChange} timeLeft={this.props.timeLeft} finished={this.props.finished} /> */}
          Current Question: {this.props.currentQuestion+1}
        </div>
      );
    } else {
      return (
        <div className="container" >
          score:{this.props.score}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(App);
