import React from 'react';
import {questions,
        answers,
        questionArrayBuilder
        } from "../../../docs/data/questions/questions.js";

let questionsArray = questionArrayBuilder(questions, answers);

class Questions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryString: "",
      questionIdx: 0
    };


    this.questions = questionArrayBuilder(questions, answers);
    // this.boolQuestionDisplay = this.boolQuestionDisplay.bind(this);
    // this.optionQuestionDisplay = this.optionQuestionDisplay.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.queryString !== nextState.queryString) {
      this.props.updateQstring(nextState.queryString);
      this.setState({queryString:""});
    }
}

  sampleQuestions() {
    return([
      {
        id: 1,
        question_type: "bool",
        question_body: "Vegetarian?",
        q_string_add_on: "vegetarian"
      },{
        id: 2,
        question_type: "bool",
        question_body: "Spicy?",
        q_string_add_on: "spicy"
      },{
        id: 3,
        question_type: "bool",
        question_body: "Trending?",
        q_string_add_on: "trending"
      },
      {
        id: 1,
        question_type: "option",
        question_body: "Choose one...",
        answers: [
          {
            answer_id: 0,
            answer_text: "Hot",
            q_string_add_on: "hot food",
            img_url: "http://img1",
            q_id: 1
          },
          {
            answer_id: 1,
            answer_text: "Cold",
            q_string_add_on: "sushi icecream sandwiches salads",
            img_url: "http://img2",
            q_id: 1
          }
        ]
      }
    ]);
  }

  getAllQuestions() {
    //Make backend call here, will be index of all questions which include answers
    // this.getAll
  }

  updateIdx() {
    return e => {
      this.setState({
        questionIdx: this.state.questionIdx + 1
      });
    };
  }

  updateQstring(val) {
    return e => {
      this.setState({
        queryString: this.state.queryString.concat(" " + val),
        questionIdx: this.state.questionIdx + 1
      });
   };
  }

  boolQuestionDisplay() {
    const currentQuestion = this.questions[this.state.questionIdx];
    // const currentQuestion = this.questions;
    return(
      <div className="question">
        <div className="question-title">{currentQuestion.body}</div>
        <div className="question-answers">
          <div className="yes-button">
            <input
              type="submit"
              value="yes"
              onClick={this.updateQstring(currentQuestion.q_string_add_on)}/>
          </div>
          <div className="no-button">
            <input
              type="submit"
              value="No"
              onClick={this.updateIdx()}/>
          </div>
        </div>
        <div className="skip-button">
          <input
            type="submit"
            value="Skip"
            onClick={this.updateIdx()}/>
        </div>
      </div>
    );
  }

  optionQuestionDisplay() {
    const currentQuestion = this.questions[this.state.questionIdx];
      return(
        <div className="question">
          <div className="question-title">{currentQuestion.body}</div>
          <div className="question-answers">
          {currentQuestion.answers.map( (answer, i) => (
              <input
                key={i}
                type="submit"
                value={answer.text}
                onClick={this.updateQstring(answer.q_string_add_on)}/>
          ))}
        </div>
          <div className="skip-button">
            <input
              type="submit"
              value="Skip"
              onClick={this.updateIdx()}/>
          </div>
        </div>
      );
  }

  noMoreQuestions() {
    return(
      <div>
        No More Questions
      </div>
    );
  }

  render() {
    let questionDisplay;

    if (this.state.questionIdx  < this.questions.length) {
      const boolQ = this.boolQuestionDisplay();
      const qType = this.questions[this.state.questionIdx].type;
      questionDisplay = qType === 'bool' ? boolQ : this.optionQuestionDisplay();
    } else {
      questionDisplay = this.noMoreQuestions();
    }

    return(
      <div>
        {questionDisplay}
      </div>
    );
  }
}

export default Questions;
