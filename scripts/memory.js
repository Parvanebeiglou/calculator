const memoryPanel = document.getElementById("memoryPanel");
const memoryTab = document.getElementById("memoryTab");

const mcBtn = document.getElementById("mc");
const mrBtn = document.getElementById("mr");

function memoryStore() {
  calcState.memory.push(currentValue());
  saveState();
  updateMemoryPanel();
  updateMemoryButtons();
}

function memoryAdd() {
  if (calcState.memory.length === 0) calcState.memory.push(0);
  calcState.memory[calcState.memory.length - 1] += currentValue();
  saveState();
  updateMemoryPanel();
  updateMemoryButtons();
}

function memorySubtract() {
  if (calcState.memory.length === 0) calcState.memory.push(0);
  calcState.memory[calcState.memory.length - 1] -= currentValue();
  saveState();
  updateMemoryPanel();
  updateMemoryButtons();
}

function memoryClear() {
  calcState.memory = [];
  saveState();
  updateMemoryPanel();
  updateMemoryButtons();
}

function memoryRecall() {
  if (calcState.memory.length === 0) return;
  calculation = calcState.memory[calcState.memory.length - 1].toString();
  calcState.calculation = calculation;
  saveState();
  updateDisplay();
}

function updateMemoryPanel() {
  if (calcState.memory.length === 0) {
    memoryPanel.innerHTML = "Memory is empty";
    return;
  }

  memoryPanel.innerHTML = calcState.memory
    .map((value, index) => `<div>M${index + 1}: ${value}</div>`)
    .join("");
}

function updateMemoryButtons() {
  if (calcState.memory.length === 0) {
    mcBtn.classList.remove("enable-memory-button");
    mrBtn.classList.remove("enable-memory-button");

    mcBtn.classList.add("disable-memory-button");
    mrBtn.classList.add("disable-memory-button");
  } else {
    mcBtn.classList.remove("disable-memory-button");
    mrBtn.classList.remove("disable-memory-button");

    mcBtn.classList.add("enable-memory-button");
    mrBtn.classList.add("enable-memory-button");
  }
}

memoryTab.addEventListener("click", () => {
  historyPanel.style.display = "none";
  memoryPanel.style.display = "block";
  updateMemoryPanel();
});
