function convert() {
  let inputValue = document.getElementById("userInput").value;
  let inputV = document.getElementById("userInputV").value;
  let result = inputValue / inputV * 1000;
  document.getElementById("resultElement").innerText = result;
}

function reset() {
  document.getElementById("userInput").value = "";
  document.getElementById("userInputV").value = "";
  document.getElementById("resultElement").innerText = "";
}

function convert_two() {
  let inputValue = document.getElementById("userInput_two").value;
  let inputV = document.getElementById("userInputV_two").value;
  let result = inputValue / inputV * 1000;
  document.getElementById("resultElement_two").innerText = result;
}

function reset_two() {
  document.getElementById("userInput_two").value = "";
  document.getElementById("userInputV_two").value = "";
  document.getElementById("resultElement_two").innerText = "";
}


function convert_three() {
  let inputValue = document.getElementById("userInput_three").value;
  let inputV = document.getElementById("userInputV_three").value;
  let result = inputValue / inputV * 1000;
  document.getElementById("resultElement_three").innerText = result;
}

function reset_three() {
  document.getElementById("userInput_three").value = "";
  document.getElementById("userInputV_three").value = "";
  document.getElementById("resultElement_three").innerText = "";
}