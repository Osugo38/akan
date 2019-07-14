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

if (result = 2 && gender===1){
   alert("You were born on Tuesday and your name would be Yaw");
 }
 else {
   document.write(result);
 }




}





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
