const questions = require('../docs/data/questions/questions.json');


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('questions').del(),

    // Inserts seed entries
    questions.forEach(el => {
      knex('questions').insert(el);
    })

  );
};
