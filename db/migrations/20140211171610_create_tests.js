var CreateTests = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('name', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('test', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('test', callback);
  };
};

exports.CreateTests = CreateTests;
