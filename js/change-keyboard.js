/* ==== Global Variables ==== */
let current_keyboard = 0;
/* End Global variables */

/**
 * load the current keyboard
 */
(function loadCurrentKeyboard() {
  document.addEventListener("DOMContentLoaded", () => {
    const saved_keyboard = localStorage.getItem("current-keyboard");

    current_keyboard = (saved_keyboard && saved_keyboard) || 0;
    renderPretendedKeyboard(current_keyboard);
  });
})();

/**
 * change the keyboard
 */
(function changeKeyboard() {
  const exchange = document.querySelector("#change-keyboard");
  exchange.addEventListener("click", () => {
    current_keyboard = current_keyboard > 1 ? 0 : ++current_keyboard;
    localStorage.setItem("current-keyboard", current_keyboard);
    renderPretendedKeyboard(current_keyboard);
  });
})();

/**
 * render the target keyboard
 * @param {*} target_keyboard the keyboard that should be rendered
 */
function renderPretendedKeyboard(target_keyboard) {
  const current_keyboard_number = document.querySelector(
    "#change-keyboard > .current-keyboard"
  );

  if (target_keyboard === 0) {
    current_keyboard_number.textContent = "1st";
    renderDefaultKeyboard();
  } else if (target_keyboard === 1) {
    current_keyboard_number.textContent = "2nd";
    renderSecondKeyboard();
  } else {
    current_keyboard_number.textContent = "3rd";
    renderThirdKeyboard();
  }
}
