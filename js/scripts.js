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
    alert("Please input Month of birth");
    return false;
  }
}
function giveDay() {
  var day = document.getElementById("date").value;
  if (day == "") {
    alert("Please Enter date of birth");
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
        document.getElementById("output").value = "Born on Sunday and your  akan name is Kwasi ";
        return true;
      }
      else if (result === 1) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Kwadwo";
        return true;
      }
      else if (result === 2) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Kwabena";
        return true;
      }
      else if (result === 3) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Kwaku";
        return true;
      }
      else if (result === 4) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Yaw";
        return true;
      }
      else if (result === 5) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Kofi";
        return true;
      }
      else if (result === 6) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Kwame";
        return true;
      }
    }
    if (gender == 2) {
      if (result === 0) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Akosu ";
        return true;
      }
      else if (result === 1) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Adoa";
        return true;
      }
      else if (result === 2) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Abenaa";
        return true;
      }
      else if (result === 3) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Akua";
        return true;
      }
      else if (result === 4) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Yaa";
        return true;
      }
      else if (result === 5) {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Afua";
        return true;
      }
      else  {
        document.getElementById("output").value ="Born on Sunday and your  akan name is Amna";
        return true;
      }
    }
}
