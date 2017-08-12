const questions = require('../docs/data/questions/questions');

exports.seed = function(knex, Promise) {
  // Begin promises by deleting ALL existing entries
  const promises = [knex('questions').del()];

  questions.questions.forEach(el => {
    promises.push(knex('questions').insert(el));
  });

  return Promise.all(promises);

};
