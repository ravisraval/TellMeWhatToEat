import React from 'react';

class Questions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryString: "",
      questionIdx: 0
    };

    //incorporate this when backend setup
    // this.questions = this.getAllQuestions();
    //placeholder for now

    this.questions = this.sampleQuestions();
  }
  componentDidMount() {
    console.log("STATTTEE", this.state);
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
        answers: {
          0: {
            answer_id: 0,
            answer_text: "Hot",
            q_string_add_on: "hot food",
            img_url: "http://img1",
            q_id: 1
          },
          1: {
            answer_id: 1,
            answer_text: "Cold",
            q_string_add_on: "sushi icecream sandwiches salads",
            img_url: "http://img2",
            q_id: 1
          }
        }
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
        queryString: val
      });

   };
  }

  boolQuestionDisplay() {
    const currentQuestion = this.questions[this.state.questionIdx];
    // const currentQuestion = this.questions;
    console.log("currentQuestion", currentQuestion);
    return(
      <div>
        <div>{currentQuestion.question_body}</div>
        <div className="yes-button">
          <input
            type="submit"
            value="yes"
            onClick={this.updateQstring(currentQuestion.q_string_add_on).then(this.updateIdx())}/>
        </div>
        <div className="no-button">
          <input
            type="submit"
            value="No"
            onClick={this.updateIdx()}/>
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

  // optionQuestionDisplay() {
  //   const currentQuestion = this.questions[this.questionIdx];
  //   return(
  //     <div>
  //       <div>{currentQuestion.question_body}</div>
  //       <ul>
  //       {currentQuestion.answers.map( (answer, i) => (
  //         <li>
  //           <input type="submit" value={answer.answer_text}>
  //             {answer.answer_text}
  //           </input>
  //
  //         </li>
  //       ))};
  //       </ul>
  //       <div className="yes-button">
  //         <input type="submit"
  //           value={currentQuestion.q_string_add_on}>
  //           Yes
  //         </input>
  //       </div>
  //       <div className="no-button">
  //         <input type="submit"
  //           value="">
  //           No
  //         </input>
  //       </div>
  //       <div className="skip-button">
  //         <input type="submit"
  //           value="">
  //           Skip
  //         </input>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    const booler = this.boolQuestionDisplay();
    return(
      <div>
        <div>
          {booler}
        </div>
      </div>
    );
  }
}

export default Questions;
