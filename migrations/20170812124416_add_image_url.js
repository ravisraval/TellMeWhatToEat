
exports.up = function(knex, Promise) {
  knex.schema.table('answers',  function(table) {
    table.string('img_url');
  });
};

exports.down = function(knex, Promise) {

};
