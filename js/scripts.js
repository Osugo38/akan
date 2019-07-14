function determine(){
 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
 var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
 var cc = parseInt(document.getElementById("year").value.slice(0, 2));
 var yy = parseInt(document.getElementById("year").value.slice(2, 4));
 var dd = parseInt(document.getElementById("date").value);
 var mm = parseInt(document.getElementById("month").value);
 var gender = parseInt(document.getElementById("list").value);
 var formula = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
 var result= formula.toFixed();

 if (result===0 && gender===1){
       alert("You were born on a SUNDAY  and your name would be KWASI");
       return true;
   }/*
   else if (result===1 && gender===1) {
     alert("You were born on a MONDAY and your name would be KWADWO");
     return true;
   }
   else if (result===2 && gender===1) {
     alert("You were born on a TUESDAY and your name would be KWABENA");
     return true;
   }
   else if (result===3 && gender===1) {
     alert("You were born on a WEDNESDAY and your name would be  KWAKU");
     return true;
   }
   else if (result===4 && gender===1) {
     alert("You were born on a THURSDAY and your name would be YAW");
     return true;
   }
   else if (result===5 && gender===1) {
     alert("You were born on a FRIDAY and your name would be KOFI");
     return true;
   }
   else if (result===6 && gender===1) {
     alert("You were born on a SATURDAY and your name would be KWAME ");
     return true;
   }
   else if (result===0 && gender===2) {
     alert("You were born on a SUNDAY and your name would be AKOSUA");
     return true;
   }
   else if (result===1 && gender===2) {
     alert("You were born on a MONDAY and your name would be ADWOA");
     return true;
   }
   else if (result===2 && gender===2) {
     alert("You were born on a TUESDAY and your name would be ABENAA");
     return true;
   }
   else if (result===3 && gender===2) {
    alert("You were born on a WEDNESDAY and your name would be AKU");
    return true;
   }
   else if (result===4 && gender===2) {
     alert("You were born on a THURSDAY and your name would be YAA");
     return true;
   }
   else if (result===5 && gender===2) {
     alert("You were born on a FRIDAY and your name would be AFUA");
     return true;
   }
   else{
     alert("You were born on a SATURDAY and your name would be AMA");
     return true;
   }
 }





















 /*
 if (result = 2 && gender===1){
    alert("You were born on Tuesday and your name would be Yaw");
  }
  if (result===0 && gender= 1){
        alert("You were born on a SUNDAY  and your name would be KWASI");
    }*
  else {
    document.write(result);
  }*/





 /*
 var akanDay = days[day.toFixed()];

 if (akanDay === 'Tuesday') {
   if (gender === 2) {
     document.getElementById("output").value = akanDay;
     document.getElementById("output").value = akanMale[0];
     return true;
   }
   //else {
 //  document.getElementById("output").value = akanFemale[0];
   //  return true;
 //  }
 }
}
*/
