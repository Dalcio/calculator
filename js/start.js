window.addEventListener("load", () => {
  const main_keyboard = document.querySelector("main.keyboard");
  const calculator_mode = window.localStorage.getItem(
    "current-calculator-mode"
  );
  const current_calculator_mode =
    (calculator_mode && calculator_mode) || "basic";

  if (current_calculator_mode === "basic") {
    activeCurrentMode("basic", "Basic Mode");
    basicKeyboardMode(main_keyboard);
  } else if (current_calculator_mode === "advanced") {
    activeCurrentMode("advanced", "Advanced Mode");
    advancedKeyboardMode(main_keyboard);
  } else if (current_calculator_mode === "financial") {
    activeCurrentMode("financial", "Financial Mode");
    financialKeyboardMode(main_keyboard);
  } else if (current_calculator_mode === "programming") {
    activeCurrentMode("programming", "Programming Mode");
    programmingKeyboardMode(main_keyboard);
  }
});

function activeCurrentMode(value, text_content) {
  const element = document.querySelector(
    `.dropdown-select > .options > .option[value="${value}"]`
  );
  element.setAttribute("selected", "true");
  drop_down_btn.textContent = text_content;
  drop_down_btn.setAttribute("value", value);
}
