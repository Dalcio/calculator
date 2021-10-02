/* ==== Global Variables ==== */
let rad_deg = "deg";
/* End Global Variables */

/**
 * Set the caret to an specific position on equation input
 * @param {*} caret_pos
 */
function setCaretPosition(caret_pos) {
  const equation_input = document.querySelector(".equation-input");

  if (equation_input.createTextRange) {
    const range = equation_input.createTextRange();
    range.move("character", caret_pos);
    range.select();
  } else if (equation_input.selectionStart) {
    equation_input.focus();
    equation_input.setSelectionRange(caret_pos, caret_pos);
  } else equation_input.focus();
}

/**
 * insert a value to caret current position on input text
 * @param {*} value_to_insert the value to be inserted
 */
function setValueToCurrentCaretPos(value_to_insert) {
  const equation_input = document.querySelector(".equation-input");
  const caret_pos = equation_input.selectionStart;
  const value = equation_input.value;

  equation_input.value =
    value.slice(0, caret_pos) + value_to_insert + value.slice(caret_pos);

  setCaretPosition(caret_pos + 1);
}

/**
 * handle the basic keys
 * @param {*} key the key to be inserted
 */
function handleKeys(key) {
  // const keys_map = document.getElementById("keys-map");
  setValueToCurrentCaretPos(2);
}

/**
 * clear the display input / equation input
 */
function clearDisplay() {
  const equation_input = document.querySelector(".equation-input");
  equation_input.value = "";
}

/**
 * handle the rad to degree and vice verse
 */
function radDeg() {
  rad_deg = (rad_deg === "rad" && "deg") || "rad";

  localStorage.setItem("rad-deg", rad_deg);
  changeRadDegBtnContent();
}

/**
 * load the previous rad_deg value from local storage on startup
 */
(function loadPreviousRadDeg() {
  document.addEventListener("DOMContentLoaded", () => {
    const previous = localStorage.getItem("rad-deg");

    rad_deg = (previous && previous) || "deg";
  });
})();

/**
 * change the rad deg button content to rad or deg
 */
function changeRadDegBtnContent() {
  const rad_deg_btn = document.querySelector(".rad-deg");
  if (rad_deg_btn !== null) {
    rad_deg_btn.textContent = (rad_deg === "rad" && "deg") || "rad";
  }
}

/**
 * resolves the equation when equal button was clicked
 */
function handleEqual() {
  resolveTheEquation();
}
/* call resolve the equation when Enter key was clicked from equation input */
(function enterPressed() {
  const equation_input = document.querySelector(".equation-input");

  equation_input.addEventListener("keypress", (event) => {
    if (event.which === 13) {
      resolveTheEquation();
    }
  });
})();
