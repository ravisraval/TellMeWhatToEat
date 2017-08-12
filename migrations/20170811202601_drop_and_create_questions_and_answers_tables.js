
exports.up = function(knex, Promise) {
  return Promise.all([

    // drop tables if they exist

    knex.schema.dropTableIfExists('answers'),
    knex.schema.dropTableIfExists('questions'),

    // create questions table

    knex.schema.createTable('questions', function(table) {
      table.increments('id').primary();
      table.string('body').unique().notNullable();
      table.string('type').notNullable();

      table.integer('pre_requisite_id');
      table.integer('tier');
      table.timestamps();
    }),

// create answers table

    knex.schema.createTable('answers', function(table) {
      table.increments('id').primary();

      table.integer('question_id').notNullable();
      table.foreign('question_id').references('id').inTable('questions');

      table.string('text').unique().notNullable();
      table.string('q_string_add_on');
      table.string('category_id');
      table.string('img_url');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('questions'),
    knex.schema.dropTable('answers')
  ]);
};
