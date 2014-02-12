var assert = require('assert')
  , tests
  , Test = geddy.model.Test;

tests = {

  'after': function (next) {
    // cleanup DB
    Test.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var test = Test.create({});
    test.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
