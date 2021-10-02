/* ==== Global Variables ==== */
const equation_input = document.querySelector(".equation-input");
/* End Global Variables */

function handleBasicKeys(key) {
  //
}

function clearDisplay() {
  const equation_input = document.querySelector(".equation-input");
  equation_input.value = "";
}

function positiveNegative() {}

/**
 * resolves the equation when equal button was clicked
 */
function handleEqual() {
  resolveTheEquation();
}
/* call resolve the equation when Enter key was clicked from equation input */
equation_input.addEventListener("keypress", (event) => {
  if (event.which === 13) {
    resolveTheEquation();
  }
});
