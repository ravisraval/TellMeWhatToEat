var bookshelf = require('../config/bookshelf');
require('./User');

var Question = bookshelf.Model.extend({
  tableName: 'questions',
  hasTimestamps: true,

  answers: function() {
    return this.belongsTo('Question');
  }

});

module.exports = Question;
