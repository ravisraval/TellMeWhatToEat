var bookshelf = require('../config/bookshelf');

var Question = bookshelf.Model.extend({
  tableName: 'questions',
  hasTimestamps: true,

  initialize: function() {
    this.on('saving', this.hashPassword, this);
  },


});

module.exports = Question;
