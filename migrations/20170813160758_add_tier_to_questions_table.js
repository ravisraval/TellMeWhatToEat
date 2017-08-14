exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('answers',  function(table) {
      table.foreign('question_id').references('id').inTable('questions');
    })
  ]);
};

exports.down = function(knex, Promise) {

};
