let display = document.getElementById("display");

function clearDiaplay() {
  display.value = "";
}

function appendValue(value) {
  display.value += value;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
