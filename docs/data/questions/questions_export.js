const questionsFile = require('./questions.js');
const answersFile = require('../answers/answers.js');
const blacklistFile = require('../blacklist/blacklist.js');

const questions = questionsFile.questions;
const answers = answersFile.answers;
const blacklist = blacklistFile.blacklist;

const addBlacklistToAnswers = (As, Qs, bL) => {
  As.forEach( answer => {
    answer.blacklist = [];
    let blackList = [];
    let whitelist = [];

    bL.forEach( blackListItem => {
      //skip any blacklist items that are not related to this answer
      if (blackListItem.answer_id !== answer.id) return;

      // push blacklisted question ids into answer's blacklist array
      blackList.push( blackListItem.blacklist_id );

      // if there is a whitelist, push the id into the answer's whitelist array
      if (blackListItem.whitelist_id) {
        whitelist.push(blackListItem.whitelist_id);
      }
    });

    // skip whitelisting if this answer does not have a whitelist
    if (whitelist.length !== 0) {

      // add every non-whitelisted question id
      Qs.forEach( question => {
        whitelist.forEach( id => {
          if (question.id !== id) blackList.push(id);
        });
      });
    }

    blackList.forEach( el => {
      if ( answer.blacklist.includes(el) ) return;
      if ( el === "" ) return;

      answer.blacklist.push(el);

    });

  });
};

const questionArrayBuilder = function (Qs, As) {
  const result = Qs;

  Qs.forEach( (question, i) => {
    let id = question.id;
    result[i].answers = [];

    As.forEach( answer => {
      if (id === answer.question_id) {
        result[i].answers.push(answer);
      }
    }
  );
  });

  return result;
};

const questionObjectBuilder = function (Qs, As) {
  let qAndA = {};

  Qs.forEach( question => {
    let id = question.id;
    qAndA[id] = question;
    qAndA[id].answers = [];

    As.forEach( answer => {
      if (id === answer.question_id) {
        qAndA[id].answers.push(answer);
      }
    }

  );
  });

  console.log(qAndA);
  return qAndA;
};

addBlacklistToAnswers(answers, questions, blacklist);


export const questionsArray = questionArrayBuilder(questions, answers);
export const questionsObject = questionObjectBuilder(questions, answers);
