//------- SELECTION OF DOM ELEMENTS -----------
const buttonNumbers = document.getElementsByName("data-number");
// console.log(buttonNumbers);
const buttonOperate = document.getElementsByName("data-operate");
const buttonEqual = document.getElementsByName("data-equal")[0];
const buttonDelete = document.getElementsByName("data-delete")[0];
//console.log(buttonEqual);
//console.log(buttonDelete);
var result = document.getElementById("result"); //console.log(result);
var operActual = ""; //variables for logic of methods
var operPrevios = "";
var operation = undefined;

buttonNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    addNumber(button.innerText);
    //inerText is value of button
  });
});

buttonOperate.forEach(function (button) {
  button.addEventListener("click", function () {
    selectOperation(button.innerText);
  });
});

buttonEqual.addEventListener("click", function () {
  calculate();
  updateDisplay();
});

buttonDelete.addEventListener("click", function () {
  clear();
  updateDisplay();
});

//METHODS
function selectOperation(op) {
  if (operActual === "") return;
  if (operActual !== "") {
    calculate();
  }
  operation = op.toString();
  operPrevios = operActual;
  operActual = "";
}

function calculate() {
  var calcul;
  const previous = parseFloat(operPrevios);
  const actual = parseFloat(operActual);
  if (isNaN(previous) || isNaN(actual)) return;
  switch (operation) {
    case "+":
      calcul = previous + actual;
      break;
    case "-":
      calcul = previous - actual;
      break;
    case "x":
      calcul = previous * actual;
      break;
    case "/":
      calcul = previous / actual;
      break;
    default:
      return;
  }
  operActual = calcul;
  operation = undefined;
  operPrevios = "";
}

function addNumber(num) {
  operActual = operActual.toString() + num.toString();
  updateDisplay();
}

function clear() {
  operActual = "";
  operPrevios = "";
  operation = undefined;
}

function updateDisplay() {
  result.value = operActual;
}

clear();
