let display = document.getElementById("display");

function clearDiaplay() {
  display.value = "";
}

function appendValue(value) {
  if(value=='a'|| value=='b'){

    if(value=='a'){
      display.value += '(';
    }else{
      display.value += ')';
    }
  }
  else{
    display.value += value;
  }
 
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
