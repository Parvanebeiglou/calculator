// ---------- LOAD STATE ----------
const saved = localStorage.getItem("calculatorState");

let calcState = saved
  ? JSON.parse(saved)
  : {
      history: [],
      memory: [],
      calculation: "",
    };

let calculation = calcState.calculation || "";

function saveState() {
  localStorage.setItem("calculatorState", JSON.stringify(calcState));
}

document.documentElement.setAttribute("data-theme", "light");

const resultEl = document.getElementById("result");

function updateDisplay() {
  resultEl.innerHTML = calculation || "0";
  calcState.calculation = calculation;
  saveState();
}

updateDisplay();
updateHistoryPanel();
updateMemoryPanel();
updateMemoryButtons();
