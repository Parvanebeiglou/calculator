const saved = localStorage.getItem("calculatorState");

window.calcState = saved
  ? JSON.parse(saved)
  : {
      theme: "light",
      history: [],
      memory: [],
      calculation: "",
    };

window.saveState = function () {
  localStorage.setItem("calculatorState", JSON.stringify(calcState));
};

window.calculation = calcState.calculation || "";

document.documentElement.setAttribute("data-theme", calcState.theme);
