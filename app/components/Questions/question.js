import React from 'react';
import { questionsArray, questionsObject } from "../../../docs/data/questions/questions_export.js";


class Questions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryString: "",
      questionIdx: 0,
      categoryId: "",
      blackListedIds: []
    };

    this.questions = questionsArray;
    // this.boolQuestionDisplay = this.boolQuestionDisplay.bind(this);
    // this.optionQuestionDisplay = this.optionQuestionDisplay.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.queryString !== nextState.queryString) {
      this.props.updateQstring(nextState.queryString);
      this.setState({queryString:""});
    }
    if (this.state.categoryId !== nextState.categoryId) {
      this.props.updateCatId(nextState.categoryId);
      this.setState({categoryId: ""});
    }
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
    let count;
    let idx = 1;
    // while (this.state.blackListedIds.includes(this.questions[this.state.questionIdx + idx].id)) {
    //   idx += 1;
    // }
    return e => {
      this.setState({
        queryString: this.state.queryString.concat(" " + val),
        questionIdx: this.state.questionIdx + idx
      });
   };
  }

  updateCatId(val) {
    return e => {
      this.setState({
        // categoryId: this.state.categoryId.concat("," + val),
        // questionIdx: this.state.questionIdx + 1
        categoryId: this.state.categoryId.concat(val),
        questionIdx: this.state.questionIdx + 1
      });
   };
  }

  boolIconPic(currentQuestion, upOrDown) {
    const thumbsUpUrl = "http://res.cloudinary.com/dluh2fsyd/image/upload/v1502566896/Thumbs-Up-Circle-300px_c2gary.png";
    const thumbsDownUrl = "http://res.cloudinary.com/dluh2fsyd/image/upload/v1502566896/Thumbs-Down-Circle-300px_n26eb6.png";
    const displayIcon = upOrDown === "up" ? thumbsUpUrl : thumbsDownUrl;
    const iconPic = {
      height: "100%",
      width: "100%",
      backgroundImage: `url(${displayIcon})`
    };
    if (upOrDown === "up") {
      return(
        <div className="icon-show"
          style={iconPic}>
          <input
            type="button"
            onClick={currentQuestion.answersq_string_add_on !== "" ?
              this.updateQstring(currentQuestion.q_string_add_on) :
              this.updateCatId(currentQuestion.category_ids)}/>
        </div>
      );
    } else {
      return(
        <div className="icon-show"
          style={iconPic}>
          <input
            type="button"
            onClick={this.updateIdx()}/>
        </div>
      );
    }
  }

  boolQuestionDisplay() {
    const currentQuestion = this.questions[this.state.questionIdx];
    // const currentQuestion = this.questions;
    return(
      <div className="question">
        <div className="question-title">{currentQuestion.body}</div>
        <div className="question-answers">
          <div className="input-container">
            {this.boolIconPic(currentQuestion, "up")}
          </div>
          <div className="input-container">
            {this.boolIconPic(currentQuestion, "down")}
          </div>
        </div>
        <div className="skip-button">
          <input
            type="button"
            value="Skip"
            onClick={this.updateIdx()}/>
        </div>
      </div>
    );
  }

  iconPic(answer, i) {
    const iconPic = {
      height: "100%",
      width: "100%",
      backgroundImage: `url(${answer.img_url})`
    };
    const textNeed = answer.img_url === "" ? answer.text : "";
    return(
      <div className="icon-show"
        style={iconPic}>
        <input
          key={i}
          type="button"
          value={textNeed}
          onClick={answer.q_string_add_on !== "" ?
            this.updateQstring(answer.q_string_add_on) :
            this.updateCatId(answer.category_ids)}>
        </input>
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
            <div className="input-container">
              {this.iconPic(answer, i)}

            </div>

          ))}
        </div>
          <div className="skip-button">
            <input
              type="button"
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
    console.log(questionsArray);
    console.log(questionsObject);
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
