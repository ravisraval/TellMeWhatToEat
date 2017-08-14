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
      tier: 1
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

  updateIdx() {
    let idx = 1;
    while (this.state.blackListedIds.includes(this.questions[this.state.questionIdx + idx].id)) {
      idx += 1;
    }
    return e => {
      this.setState({
        questionIdx: this.state.questionIdx + idx
      });
    };
  }

  updateQstring(answer, currentQuestion) {
    if (answer) {
      let idx = 1;
            console.log("ANSWER TIER", currentQuestion.tier);
      while (this.state.tier < currentQuestion.tier &&
        this.state.blackListedIds.includes(this.questions[this.state.questionIdx + idx].id)) {
        idx += 1;
      }
      let allBlisted = [];
      answer.blacklist.forEach( i => {
        allBlisted.push(i);
      });

      return e => {
        this.setState({
          queryString: this.state.queryString.concat(" " + answer.q_string_add_on),
          questionIdx: this.state.questionIdx + idx,
          blackListedIds: this.state.blackListedIds.concat(allBlisted),
          tier: Number(currentQuestion.tier)+1,
          answerTags: this.state.answerTags.concat(answer.text)
        });
      };
    }

  }

  updateCatId(answer, currentQuestion) {
    if (answer) {
      let idx = 1;
      console.log("ANSWER TIER", answer.tier);
      while (this.state.tier < currentQuestion.tier &&
        this.state.blackListedIds.includes(this.questions[this.state.questionIdx + idx].id)) {
        idx += 1;
      }
      let allBlisted = [];
      answer.blacklist.forEach( i => {
        allBlisted.push(i);
      });
      console.log("ANSWER TIER", this.state);
      return e => {
        this.setState({
          categoryId: this.state.categoryId.concat(answer.category_id),
          questionIdx: this.state.questionIdx + idx,
          blackListedIds: this.state.blackListedIds.concat(allBlisted),
          tier: Number(currentQuestion.tier)+1,
          answerTags: this.state.answerTags.concat(answer.text)
        });
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

  boolQuestionDisplay() {
    const currentQuestion = this.genRandomQuestion();
    // const currentQuestion = this.questions;
    const displaySkip = this.state.questionIdx < this.questions.length-2 ? this.skipButton() : "";
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


  optionQuestionDisplay() {
    const currentQuestion = this.genRandomQuestion();
    const displaySkip = this.state.questionIdx < this.questions.length-2 ? this.skipButton() : "";
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
    let randoTierQs = this.questions.filter( el => el.tier === this.state.tier);
    console.log(randoTierQs);
    let len = randoTierQs.length;
    console.log(len);
    let randoQ = randoTierQs[Math.floor(Math.random() * len)];
    console.log("-----", randoQ);
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
    console.log(questionsArray);
    console.log(questionsObject);
    console.log(this.state);
    let questionDisplay;
    const appliedTags = this.appliedTags();
    let randomQuestion = this.genRandomQuestion();
    if ((this.state.questionIdx  < this.questions.length) && randomQuestion) {

      const boolQ = this.boolQuestionDisplay();
      const qType = this.genRandomQuestion().type;
      questionDisplay = qType === 'bool' ? boolQ : this.optionQuestionDisplay();
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
