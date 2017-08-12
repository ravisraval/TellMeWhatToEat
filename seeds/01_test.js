const questions = require('../docs/data/questions/questions.json');

exports.seed = function(knex, Promise) {

  // Begin promises by deleting ALL existing entries
  const promises = [knex('questions').del()];


  return Promise.join(
    // Deletes ALL existing entries
    knex('questions').del(),

    // Insert new entries
    knex('questions').returning("id").insert({
        "id": 74,
        "body": "test question",
        "type": "options",
        "tier": 1,
      })
  );
};
