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
 * @param {string | number} value_to_insert the value to be inserted
 */
function setValueToCurrentCaretPos(value_to_insert) {
  const equation_input = document.querySelector(".equation-input");
  const caret_pos = equation_input.selectionStart;
  const value = equation_input.value;

  equation_input.value =
    value.slice(0, caret_pos) + value_to_insert + value.slice(caret_pos);

  setCaretPosition(caret_pos + value_to_insert.toString().length);
}

/**
 * removes the value at caret position with backspace. Verify if the value to be deleted is for example: sin( or log( and remove the entire string
 */
function backspaceAtCaretPos() {
  const equation_input = document.querySelector(".equation-input");
  const caret_pos = equation_input.selectionStart;
  const slice_left = equation_input.value.slice(0, caret_pos);
  const slice_right = equation_input.value.slice(caret_pos);
  const pattern = /(a{0,1}(sin|cos|tan)h{0,1}|log|ln|ℯ\^|cbrt)\($/g;

  if (slice_left.match(pattern)) {
    const new_slice_left = slice_left.replace(pattern, "");
    equation_input.value = new_slice_left + slice_right;

    setCaretPosition(caret_pos - (slice_left.length - new_slice_left.length));
  } else {
    equation_input.value = slice_left.slice(0, caret_pos - 1) + slice_right;
    setCaretPosition(caret_pos - 1);
  }
}

/**
 * when delete was clicked
 */
function deleteAtCaretPos() {
  const equation_input = document.querySelector(".equation-input");
  const caret_pos = equation_input.selectionStart;
  const slice_left = equation_input.value.slice(0, caret_pos);
  const slice_right = equation_input.value.slice(caret_pos);
  const pattern = /^(a{0,1}(sin|cos|tan)h{0,1}|log|ln|ℯ\^|cbrt)\(/g;

  if (slice_right.match(pattern)) {
    const new_slice_right = slice_right.replace(pattern, "");
    equation_input.value = slice_left + new_slice_right;
    // debugger;
    setCaretPosition(caret_pos);
  } else {
    equation_input.value = slice_left + slice_right.slice(caret_pos - 1);
    setCaretPosition(caret_pos);
  }
}

/**
 * delete when backspace and delete btn will be clicked
 */
(function pressedBackSpace() {
  const backspace = document.getElementById("backspace");
  const equation_input = document.querySelector(".equation-input");

  backspace.addEventListener("click", backspaceAtCaretPos);
  equation_input.addEventListener("keydown", (event) => {
    if (event.which === 8) {
      event.preventDefault();
      backspaceAtCaretPos();
    } else if (event.which === 46) {
      event.preventDefault();
      deleteAtCaretPos();
    }
  });
})();

/**
 * handle the basic keys
 * @param {*} key the key to be inserted
 */
function handleKeys(key_class) {
  if (key_class === "positive-negative") {
    debugger;
    // should verify if the number is positive or negative. if negative should make positive removing the signal (-number) = number
  } else if (Object.keys(all_keys).includes(key_class)) {
    setValueToCurrentCaretPos(all_keys[key_class]);
  }
}

/**
 * clear the display input / equation input
 */
function clearDisplay() {
  const equation_input = document.querySelector(".equation-input");
  const result_html = document.querySelector(".result-container > .result");
  equation_input.value = "";
  result_html.textContent = 0;
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
