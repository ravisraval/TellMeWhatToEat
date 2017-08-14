exports.up = function(knex, Promise) {
  knex.schema.table('questions',  function(table) {
    table.integer('tier');
  });
};

exports.down = function(knex, Promise) {

};
