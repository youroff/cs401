"use strict";

var $ = function (id) { return document.getElementById(id); };

var calculateChange = function() {
    var coins = new Coins(parseInt($("cents").value));
    
    if (coins.isValid()) {
      $("quarters").value = coins.getNumber(25);
      $("dimes").value = coins.getNumber(10);
      $("nickels").value = coins.getNumber(5);
      $("pennies").value = coins.getNumber(1);
    } else {
      alert("Please enter a valid number between 0 and 99");
    }
};

window.onload = function () {
    $("calculate").onclick = calculateChange;
    $("cents").focus();
};