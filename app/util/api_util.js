export function getQuestions() {
  return fetch('/questions', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(res => console.log(res));
}
