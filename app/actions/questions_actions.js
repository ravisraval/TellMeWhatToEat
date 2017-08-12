import * as API from './util/api_util';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';


export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const fetchQuestions = () => dispatch => (
  API.fetchQuestions().then(dives => (
    dispatch(receiveQuestions(dives))
  ))
);
