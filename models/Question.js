var bookshelf = require('../config/bookshelf');
require('./Answer');

var Question = bookshelf.Model.extend({
  tableName: 'questions',
  hasTimestamps: true,

  answers: function() {
    return this.hasMany('Answer');
  }

});

module.exports = Question;
