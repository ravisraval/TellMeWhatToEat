const questions = require('../docs/data/converters/questions/questions.json');

exports.seed = function(knex, Promise) {

  // Begin promises by deleting ALL existing entries
  const promises = [knex('questions').del()];

  questions.forEach(el => {
    promises.push(knex('questions').insert(el));
  });

  return Promise.all(promises);

};
