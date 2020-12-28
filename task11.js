var temp = prompt("Enter Celsius Temperature", "");
var celtemp = temp * 9 / 5 + 32;
document.write ("<b>" + temp + '\xB0C is ' + celtemp +' \xB0F' + "<br>" + "</b>");

var tempa = prompt("Enter Fahrenheit Temperature", "");
var fahtemp = (tempa - 32) * 5 / 9;
document.write ("<b>" + tempa + '\xB0F is ' + fahtemp + ' \xB0C' + "</b>");