const themeButton = document.getElementById("theme-toggle");
const availableThemes = ["light", "dark", "green", "blue"];
let currentThemePosition = 0;

function switchTheme() {
  currentThemePosition = (currentThemePosition + 1) % availableThemes.length;
  const newTheme = availableThemes[currentThemePosition];

  document.documentElement.setAttribute("data-theme", newTheme);
}

themeButton.addEventListener("click", switchTheme);
