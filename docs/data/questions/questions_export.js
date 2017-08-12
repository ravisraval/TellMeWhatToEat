const questions = require('./questions.js');
const answers = require('../answers/answers.js');

const questionArrayBuilder = function (qs, as) {
  const result = qs.questions;

  result.forEach( (q, i) => {
    let id = q.id;
    result[i].answers = [];

    as.answers.forEach( a => {
      if (id === a.question_id) {
        result[i].answers.push(a);
      }
    }

  );
  });

  return result;
};

const questionObjectBuilder = function (qs, as) {
  let qAndA = {};

  qs.forEach( q => {
    let id = q.id;
    qAndA[id] = q;
    qAndA[id].answers = [];

    as.forEach( a => {
      if (id === a.question_id) {
        qAndA[id].answers.push(a);
      }
    }

  );
  });

  return qAndA;
};

console.log(questionArrayBuilder(questions, answers));
export default questionArrayBuilder(questions, answers);
