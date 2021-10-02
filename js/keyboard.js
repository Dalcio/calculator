/**
 * handle items when DOMContentLoaded
 */
(function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", () => {
    staticKeys();
  });
})();

/**
 * Render the default keyboard to left keyboard
 */
function renderDefaultKeyboard() {
  const left_keyboard = document.querySelector(".left-keyboard");
  const default_keyboard = defaultKeyboard();
  left_keyboard.replaceWith(default_keyboard);
}

/**
 * Render the second keyboard into left keyboard
 */
function renderSecondKeyboard() {
  const left_keyboard = document.querySelector(".left-keyboard");
  const second_keyboard = secondKeyboard();
  left_keyboard.replaceWith(second_keyboard);
}

/**
 * Render the third keyboard into left keyboard
 */
function renderThirdKeyboard() {
  const left_keyboard = document.querySelector(".left-keyboard");
  const third_keyboard = thirdKeyboard();
  left_keyboard.replaceWith(third_keyboard);
  changeRadDegBtnContent();
}
