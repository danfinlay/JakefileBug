var Tests = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Test.all(function(err, tests) {
      if (err) {
        throw err;
      }
      self.respondWith(tests, {type:'Test'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , test = geddy.model.Test.create(params);

    if (!test.isValid()) {
      this.respondWith(test);
    }
    else {
      test.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(test, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Test.first(params.id, function(err, test) {
      if (err) {
        throw err;
      }
      if (!test) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(test);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Test.first(params.id, function(err, test) {
      if (err) {
        throw err;
      }
      if (!test) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(test);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Test.first(params.id, function(err, test) {
      if (err) {
        throw err;
      }
      test.updateProperties(params);

      if (!test.isValid()) {
        self.respondWith(test);
      }
      else {
        test.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(test, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.Test.first(params.id, function(err, test) {
      if (err) {
        throw err;
      }
      if (!test) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.Test.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(test);
        });
      }
    });
  };

};

exports.Tests = Tests;
