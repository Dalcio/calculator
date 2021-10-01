/**
 * handle items when DOMContentLoaded
 */
(function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", () => {
    staticKeys();
    renderDefaultKeyboard();
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
