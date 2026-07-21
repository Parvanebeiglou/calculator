const resultEl = document.getElementById("result");
const operators = ["+", "-", "*", "/"];

function updateDisplay() {
  resultEl.innerHTML = calculation || "0";
  calcState.calculation = calculation;
  saveState();
}

updateDisplay();

// ---------- INPUT ----------
function press(value) {
  const last = calculation.slice(-1);
  const isOperator = (v) => operators.includes(v);

  if (value === ".") {
    const parts = calculation.split(/[+\-*/]/);
    if (parts[parts.length - 1].includes(".")) return;
  }

  if (isOperator(last) && isOperator(value)) {
    calculation = calculation.slice(0, -1) + value;
  } else {
    calculation += value;
  }

  updateDisplay();
}

function currentValue() {
  return eval(calculation || "0");
}

// ---------- OPERATIONS ----------
function clearAll() {
  calculation = "";
  updateDisplay();
}

function clearEntry() {
  calculation = calculation.replace(/(\d+\.?\d*)$/, "");
  updateDisplay();
}

function backspace() {
  calculation = calculation.slice(0, -1);
  updateDisplay();
}

function square() {
  calculation = (currentValue() ** 2).toString();
  updateDisplay();
}

function cube() {
  calculation = (currentValue() ** 3).toString();
  updateDisplay();
}

function squareRoot() {
  const val = currentValue();
  if (val < 0) {
    calculation = "";
    updateDisplay();
    return;
  }
  calculation = Math.sqrt(val).toString();
  updateDisplay();
}

function percent() {
  calculation = (currentValue() / 100).toString();
  updateDisplay();
}

function changeSign() {
  calculation = calculation.replace(/(\d+\.?\d*)$/, (m) =>
    (Number(m) * -1).toString()
  );
  updateDisplay();
}

function reciprocal() {
  const result = 1 / currentValue();
  if (!Number.isFinite(result)) {
    calculation = "";
    resultEl.innerHTML = "Error";
    return;
  }
  calculation = result.toString();
  updateDisplay();
}
