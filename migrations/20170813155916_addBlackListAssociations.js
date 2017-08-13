
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('blacklist', function(table) {
      table.increments();
      table.integer('answer_id');
      table.integer('blacklist_id');
      table.integer('whitelist_id');
      table.bool('end_question');
    })
  ]);
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('black');
};
