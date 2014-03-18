var shoe = require('shoe');
var inject = require('reconnect-core');

module.exports = inject(function () {
  var args = Array.prototype.slice.call(arguments);
  return shoe.apply(null, args);
});
