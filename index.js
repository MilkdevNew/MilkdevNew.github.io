var YearNow = new Date().getFullYear();
var start = 2020;

var long = YearNow - start;
console.log(long);
var msg = "Hi my name is Milk I been coding for ";
var result = msg.concat(long, " Years");

document.getElementsByClassName("lead my-4").innerHTML = result;

function Click() {
  window.open("https://github.com/MilkdevNew/Custom-Commands-V2");
}

function Clicke() {
  window.open("https://github.com/MilkdevNew/Game-os");
}

function ClickAdmin() {
  window.open("https://web.roblox.com/library/7429233006/Admin");
}
