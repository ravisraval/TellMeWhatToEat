var async = require('async');


var moment = require('moment');
var request = require('request');
var qs = require('querystring');

var Question = require('../models/Question');

  /**
   * GET /questions
   * return index of questions
   */

  exports.question_list = (req, res) => {
    Question.fetch({withRelated: ['answers']})
        .then( question => {
          res.json(question);
        })
        .catch( error => {
          res.json(error);
        });
  };
