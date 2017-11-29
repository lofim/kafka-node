var util = require('util');

var SocketHasClosedError = function (message) {
  Error.captureStackTrace(this, this);
  this.message = message;
};

util.inherits(SocketHasClosedError, Error);
SocketHasClosedError.prototype.name = 'SocketHasClosedError';

module.exports = SocketHasClosedError;
