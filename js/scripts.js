function giveYear() {
  var trueYear = document.getElementById("year").value;
  if (trueYear == "") {
    alert("Please input Year of birth");
    return false;
  }
}
function giveMonth() {
  var month = document.getElementById("month").value;
  if (month == "") {
    alert("please input Month of birth");
    return false;
  }
}
function giveDay() {
  var day = document.getElementById("date").value;
  if (day == "") {
    alert("please Enter date of birth");
    return false;
  }
}

function selectGender() {
  var gender = document.getElementById("list").value;
  if (gender == 0) {
    alert("Gender must be selected");
    return false;
  }
}
   function determine(){
    var cc = parseInt(document.getElementById("year").value.slice(0, 2));
    var yy = parseInt(document.getElementById("year").value.slice(2, 4));
    var dd = parseInt(document.getElementById("date").value);
    var mm = parseInt(document.getElementById("month").value);
    var gender = parseInt(document.getElementById("list").value);
    var formula =(((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var result = parseInt(formula.toFixed());
    if (gender === 1) {
      if (result === 0) {
        document.getElementById("output").value = "Born on a SUNDAY ,akan name would be Kwasi ";
        return true;
      }
      else if (result === 1) {
        document.getElementById("output").value ="Born on a MONDAY ,akan name would be Kwadwo";
        return true;
      }
      else if (result === 2) {
        document.getElementById("output").value ="Born on a TUESDAY ,akan name would be Kwabena";
        return true;
      }
      else if (result === 3) {
        document.getElementById("output").value ="Born on a WEDNESDAY ,akan name would be  Kwaku";
        return true;
      }
      else if (result === 4) {
        document.getElementById("output").value ="Born on a THURSDAY ,akan name would be Yaw";
        return true;
      }
      else if (result === 5) {
        document.getElementById("output").value ="Born on a FRIDAY ,akan name would be  Kofi";
        return true;
      }
      else if (result === 6) {
        document.getElementById("output").value ="Born on a SATURDAY ,akan name would be  Kwame";
        return true;
      }
    }
    if (gender == 2) {
      if (result === 0) {
        document.getElementById("output").value ="Born on a SUNDAY ,akan name would be  Akosu ";
        return true;
      }
      else if (result === 1) {
        document.getElementById("output").value ="Born on a MONDAY ,akan name would be  Adoa";
        return true;
      }
      else if (result === 2) {
        document.getElementById("output").value ="Born on a TUESDAY ,akan name would be Abenaa";
        return true;
      }
      else if (result === 3) {
        document.getElementById("output").value ="Born on a WEDNESDAY ,akan name would be  Akua";
        return true;
      }
      else if (result === 4) {
        document.getElementById("output").value ="Born on a THURSDAY ,akan name would be  Yaa";
        return true;
      }
      else if (result === 5) {
        document.getElementById("output").value ="Born on a FRIDAY ,akan name would be Afua";
        return true;
      }
      else  {
        document.getElementById("output").value ="Born on a SATURDAY ,akan name would be Amna";
        return true;
      }
    }
}
