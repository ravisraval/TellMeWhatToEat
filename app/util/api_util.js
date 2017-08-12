export const fetchQuestions = function fetchQuestions() {
  return fetch('/questions', {
    method: 'get',
  }).then(res => console.log(res));
};
