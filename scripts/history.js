const historyBox = document.querySelector('.history-text');
const historyPanel = document.getElementById('historyPanel');
const historyTab = document.getElementById('historyTab');

function updateHistoryPanel() {
  if (calcState.history.length === 0) {
    historyBox.innerHTML = 'There is no history here yet';
    return;
  }

  historyBox.innerHTML = calcState.history
    .map((item) => `<div class="history-item">${item}</div>`)
    .join('');
}

function equals() {
  try {
    const result = currentValue();
    if (!Number.isFinite(result)) throw new Error();

    calcState.history.push(`${calculation} = ${result}`);
    saveState();

    updateHistoryPanel();

    calculation = result.toString();
    calcState.calculation = calculation;
    saveState();

    updateDisplay();
  } catch {
    calculation = '';
    calcState.calculation = '';
    saveState();
    resultEl.innerHTML = 'Error';
  }
}

function clearHistory() {
  calcState.history = [];
  saveState();
  updateHistoryPanel();
}

historyTab.addEventListener('click', () => {
  historyPanel.style.display = 'block';
  memoryPanel.style.display = 'none';
  updateHistoryPanel();
});
