var a = [];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Aku","Yaa","Afua","Ama"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function century(){
  var cc = parseInt(document.getElementById("century").value);
  if(cc < 18 || cc > 21){
    alert("invalid century");
  }
}
function year (){
  var yy = parseInt(document.getElementById("year").value);
 if(yy<0 || yy >99){
     alert("invalid year");
 }
}
function month(){
  var mm = parseInt(document.getElementById("month").value);
  if (mm < 0 || mm > 12){
       alert("invalid month");
  }
}
function date(){
  var dd = parseInt(document.getElementById("date").value);
  if (dd < 0 ||dd >31){
         alert("invalid day");
  }
}
function gender(){
  var b = (document.getElementById("list").value);

}
function formula(cc,yy,mm,dd){
  var actualDay = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
}
function operation(){
  var actualDay =actualDay.toFixed();

  }
function determine(){
  if (b=== "male" && actualDay === 0){
  alert("You were born on a SUNDAY  and your name would be KWASI");
}
else if (b=== "male" && actualDay === 1) {
  alert("You were born on a MONDAY and your name would be KWADWO");
}
else if (b=== "male" && actualDay === 2) {
  alert("You were born on a TUESDAY and your name would be KWABENA");
}
else if (b=== "male" && actualDay === 3) {
  alert("You were born on a WEDNESDAY and your name would be  KWAKU");
}
else if (b=== "male" && actualDay === 4) {
  alert("You were born on a THURSDAY and your name would be YAW");
}
else if (b=== "male" && actualDay === 5) {
  alert("You were born on a FRIDAY and your name would be KOFI");
}
else if (b=== "male" && actualDay === 6) {
  alert("You were born on a SATURDAY and your name would be KWAME ");
}
else if (b=== "female" && actualDay === 1) {
  alert("You were born on a SUNDAY and your name would be AKOSUA");
}
else if (b=== "female" && actualDay === 1) {
  alert("You were born on a MONDAY and your name would be ADWOA");
}
else if (b=== "female" && actualDay === 2) {
  alert("You were born on a TUESDAY and your name would be ABENAA");
}
else if (b=== "female" && actualDay === 3) {
  alert("You were born on a WEDNESDAY and your name would be AKU");
}
else if (b=== "female" && actuaDay === 4) {
  alert("You were born on a THURSDAY and your name would be YAA");
}
else if (b=== "female" && actualDay === 5) {
  alert("You were born on a FRIDAY and your name would be AFUA");
}
else {
  alert("You were born on a SATURDAY and your name would be AMA")
}
}
