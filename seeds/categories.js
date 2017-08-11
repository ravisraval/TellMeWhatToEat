const categories = require('../docs/data/categories/categories.json');

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    categories.forEach(el => {
      knex('categories').insert(el);
    })

  );
};
