
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('answers',  function(table) {
      table.dropForeign('question_id');
      table.dropUnique('text');
    })
  ]);
};


exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('answers',  function(table) {
      table.foreign('question_id').references('id').inTable('questions');
    })
  ]);
};
