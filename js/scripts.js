var a = [];
var b = [];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Aku","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function century(){
  var cc = parseInt(document.getElementById("year").value);
  a.push(cc);
}
function year (){
  var yy = parseInt(document.getElementById("year").value);
  a.push(yy);
}
function month(){
  var mm = parseInt(document.getElementById("month").value);
  a.push(mm)
}
function date(){
  var dd = parseInt(document.getElementById("date").value);
  a.push(dd)
}
function gender(){

}
function formula(cc,yy,mm,dd){
  return ((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
}
