' use strict';

var x = 2477.4356;

/* The toFixed() Method */
document.getElementById('formatNumberFixed').innerHTML = 
'Value of x = ' + x + '<br>' +
'Value of x with 2 decimal places = ' + x.toFixed(2) + '<br>' +
'Value of x with 3 decimal places = ' + x.toFixed(3) + '<br>' +
'Value of x with 6 decimal places = ' + x.toFixed(6) + '<br>' +
'Value of x with 8 decimal places = ' + x.toFixed(8) + '<br>';


/*The toPrecision() Method */
document.getElementById('formatNumberPrecision').innerHTML =
'Value of x = ' + x + '<br>' +
'Value of x with 2 significant digits = ' + x.toPrecision(2) + '<br>' +
'Value of x with 5 significant digits = ' + x.toPrecision(5) + '<br>' +
'Value of x with 6 significant digits = ' + x.toPrecision(6) + '<br>' +
'Value of x with 15 significant digits = ' + x.toPrecision(15) + '<br>';