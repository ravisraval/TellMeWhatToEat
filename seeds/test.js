const questions = require('../docs/data/questions/questions.json');

exports.seed = function(knex, Promise) {

  // Begin promises by deleting ALL existing entries
  const promises = [knex('questions').del()];


  return Promise.join(
    // Deletes ALL existing entries
    knex('questions').del(),

    // Insert new entries
    knex('questions').insert({
        "id": 1,
        "body": "Hot or Cold",
        "type": "options",
        "tier": 1,
      })
  );
};
