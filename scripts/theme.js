const themeButton = document.getElementById("theme-toggle");
const availableThemes = ["light", "dark", "green", "blue"];

let currentThemePosition = availableThemes.indexOf(calcState.theme);
if (currentThemePosition === -1) currentThemePosition = 0;

function switchTheme() {
  currentThemePosition = (currentThemePosition + 1) % availableThemes.length;
  const newTheme = availableThemes[currentThemePosition];

  calcState.theme = newTheme;
  saveState();

  document.documentElement.setAttribute("data-theme", newTheme);
}

themeButton.addEventListener("click", switchTheme);
