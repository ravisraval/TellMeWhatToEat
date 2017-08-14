export const fetchQuestions = function fetchQuestions() {
  return fetch('/questions', {
    method: 'get',
  });
};
