window.addEventListener("load", () => {
  const keyboard = document.querySelector("main.keyboard");
  // const
  const calculator_mode = window.localStorage.getItem(
    "current-calculator-mode"
  );
  const current_calculator_mode =
    (calculator_mode && calculator_mode) || "basic";

  if (current_calculator_mode === "basic") {
    activeCurrentMode("basic", "Basic Mode");
    basicKeyboardMode(keyboard);
  } else if (current_calculator_mode === "advanced") {
    activeCurrentMode("advanced", "Advanced Mode");
  } else if (current_calculator_mode === "financial") {
    activeCurrentMode("financial", "Financial Mode");
  } else if (current_calculator_mode === "programming") {
    activeCurrentMode("programming", "Programming Mode");
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

function basicKeyboardMode(keyboard) {
  const basic_keyboard = buildBasicKeyboard();
  keyboard.classList.remove(["", ""]);
  keyboard.classList.add("basic-keyboard");

  keyboard.replaceWith(basic_keyboard);
}

function financialKeyboardMode(keyboard) {}

function programmingKeyboardMode(keyboard) {}

function advancedKeyboardMod(keyboard) {}
