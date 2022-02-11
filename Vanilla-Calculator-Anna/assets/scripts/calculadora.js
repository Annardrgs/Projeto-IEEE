let n1 = "";
let n2 = "";
let operator = "";
let res = "";

function addNumber(number) {
  if (res !== "" && operator === "") {
    erase();
  }

  if (operator === "") {
    document.getElementById("display").innerHTML += number;
    n1 += number;
  } else if (operator !== "" && n2 === "") {
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML = number;
    n2 = number;
  } else {
    document.getElementById("display").innerHTML += number;
    n2 += number;
  }
}

function erase() {
  n1 = "";
  n2 = "";
  operator = "";
  res = "";

  document.getElementById("display").innerHTML = "";
}

function addOperator(operatorSelected) {
  if (n1 !== "") {
    operator = operatorSelected;
  }
}

function calculate(event) {
  event.preventDefault();

  if (n1 !== "" && n2 !== "" && operator !== "") {
    switch (operator) {
      case "+":
        res = parseInt(n1) + parseInt(n2);
        break;

      case "-":
        res = parseInt(n1) - parseInt(n2);
        break;

      case "*":
        res = parseInt(n1) * parseInt(n2);
        break;

      case "/":
        res = parseInt(n1) / parseInt(n2);
        break;

        case "^":
          res = parseInt(n1) ** parseInt(n2);
          break;
          
      default:
        break;
    }   

    document.getElementById("display").innerHTML = "" + res.toFixed(2);

    n1 = "" + res;
    n2 = "";
    operator = "";
  }
}