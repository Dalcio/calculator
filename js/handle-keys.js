/* ==== Global variables ==== */
/* end Global variables  */

/**
 * handle the basic keys on keyboard "( ) x2 √ + × − ÷ % 0 1 2 3 4 5 6 7 8 9 ."
 * @param {*} key is the key button that contain the key content
 */
function handleBasicKey(key) {
  const input_operation = document.querySelector("div.operation");
  const pressed_key = key.target.textContent;

  const default_keys = "( ) + × − ÷ % 0 1 2 3 4 5 6 7 8 9 . √";

  if (default_keys.includes(pressed_key)) {
    document.execCommand("insertText", false /*no UI*/, pressed_key);
    input_operation.focus();
  } else if ("x2") {
    // execCommand(input_operation);
    insertAtCaretPosition(
      input_operation,
      "<br><small><sup>2</sup></small><br>"
    );
  }
}

function insertSquare() {}
