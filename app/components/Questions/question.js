import React from 'react';
import { questionsArray, questionsObject } from "../../../docs/data/questions/questions_export.js";

class Questions extends React.Component {
  constructor(props){
    super(props);
    this.questions = questionsArray;

    this.state = {
      queryString: "",
      questionIdx: 0,
      categoryId: "",
      blackListedIds: [],
      answerTags: [],
      tier: 1,
      continue: true,
      questions: questionsArray
    };


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

  updatedQArray() {
    const newQs = this.state.questions.filter( el => !this.state.blackListedIds.includes(el.id));
    // this.setState({questions: })
    return newQs;
  }

  updateIdx() {
    return e => {
      this.setState({
        questionIdx: this.state.questionIdx + 1
      });
    };
  }

  updateQstring(answer, currentQuestion) {
    if (answer) {
      let allBlisted = [];
      answer.blacklist.forEach( i => {
        allBlisted.push(i);
      });

      return e => {
        this.setState({
          queryString: this.state.queryString.concat(" " + answer.q_string_add_on),
          questionIdx: this.state.questionIdx + 1,
          blackListedIds: this.state.blackListedIds.concat(allBlisted),
          tier: Number(currentQuestion.tier)+1,
          answerTags: this.state.answerTags.concat(answer.text),
          continue: Boolean(answer.end_answer)
        }, this.setState({questions: this.updatedQArray()}));
      };
    }

  }

  updateCatId(answer, currentQuestion) {
    if (answer) {
      let allBlisted = [];
      answer.blacklist.forEach( i => {
        allBlisted.push(i);
      });
      return e => {
        this.setState({
          categoryId: this.state.categoryId.concat(answer.category_id),
          questionIdx: this.state.questionIdx + 1,
          blackListedIds: this.state.blackListedIds.concat(allBlisted),
          tier: Number(currentQuestion.tier)+1,
          answerTags: this.state.answerTags.concat(answer.text),
          continue: Boolean(answer.end_answer)
        }, this.setState({questions: this.updatedQArray()}));
      };
    }
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
            onClick={currentQuestion.answers[0].q_string_add_on !== "" ?
              this.updateQstring(currentQuestion.answers[0], currentQuestion) :
              this.updateCatId(currentQuestion.answers[0], currentQuestion)}/>
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

  skipButton() {
    return(
      <div className="skip-button">
        <input
          type="button"
          value="Skip"
          onClick={this.updateIdx()}/>
      </div>
    );
  }

  boolQuestionDisplay(randomQuestion) {
    const currentQuestion = randomQuestion;
    // const currentQuestion = this.state.questions;
    const displaySkip = this.state.questionIdx < this.state.questions.length-2 ? this.skipButton() : "";
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
        {displaySkip}
      </div>
    );
  }

  iconPic(answer, i, currentQuestion) {
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
            this.updateQstring(answer, currentQuestion) :
            this.updateCatId(answer, currentQuestion)}>
        </input>
      </div>
    );
}


  optionQuestionDisplay(randomQuestion) {
    const currentQuestion = randomQuestion;
    const displaySkip = this.state.questionIdx < this.state.questions.length-2 ? this.skipButton() : "";
      return(
        <div className="question">
          <div className="question-title">{currentQuestion.body}</div>
          <div className="question-answers">
          {currentQuestion.answers.map( (answer, i) => (
            <div className="input-container">
              {this.iconPic(answer, i, currentQuestion)}
            </div>
          ))}
        </div>
          {displaySkip}
        </div>
      );
  }

  noMoreQuestions() {
    return(
      <div>
        <div>
          No More Questions
        </div>
        <button>
          <a href="/restaurants">Redo Search?</a>
        </button>
      </div>


    );
  }

  genRandomQuestion() {
    let randoTierQs = this.state.questions.filter( el => el.tier === this.state.tier);
    console.log("randoTierQs", randoTierQs);
    let len = randoTierQs.length;
    let randoQ = randoTierQs[Math.floor(Math.random() * len)];
    return randoQ;
  }

  appliedTags() {
    const tags = this.state.answerTags;
    return(
      <div>
      {tags.map((answer) => (
        <div>{answer}</div>
      ))}
      </div>
    );

  }

  render() {
    let questionDisplay;
    const appliedTags = this.appliedTags();
    let randomQuestion = this.genRandomQuestion();
    console.log("RENDER");
    console.log(this.state);
    console.log(randomQuestion);
    console.log(this.state.continue);
    if ((this.state.questionIdx  < this.state.questions.length) && randomQuestion && this.state.continue) {

      const boolQ = this.boolQuestionDisplay(randomQuestion);
      const qType = randomQuestion.type;
      questionDisplay = qType === 'bool' ? boolQ : this.optionQuestionDisplay(randomQuestion);
    } else {
      questionDisplay = this.noMoreQuestions();
    }
    return(
      <div>
        {questionDisplay}
        {appliedTags}
      </div>
    );
  }
}

export default Questions;
