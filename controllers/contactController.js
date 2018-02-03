const Contact = require('../models/contact');

var async = require('async');

exports.getAll = function(req, res) {
  async.parallel({
    count: function(callback) {
      Contact.count(callback);
    },
    list: function(callback) {
      Contact.find(callback);
    }
  }, function(err, results) {
    // res.json({
    //   title: 'get all contacts',
    //   error: err,
    //   count: results.count,
    //   list: results.list
    // });
    res.write(JSON.stringify({
      title: 'get all contacts',
      error: err,
      count: results.count,
      list: results.list
    }));
    res.end();
  })
}