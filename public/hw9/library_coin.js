"use strict";

var Coins = function(cents) {
  this.cents = cents;
}

Coins.prototype.isValid = function() {
  return !(isNaN(this.cents) || this.cents < 0 || this.cents > 99);
}

Coins.prototype.getNumber = function(divisor) {
  var rtn = Math.floor(this.cents / divisor);
  this.cents %= divisor;
  return rtn;
}
