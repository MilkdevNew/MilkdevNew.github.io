var YearNow = new Date().getFullYear();
var start = 2020;

var long = YearNow - start;
console.log(long);
var msg = "Hi my name is Milk I been coding for ";
var result = msg.concat(long, " Years");

document.getElementById("AboutME").innerHTML = result;
