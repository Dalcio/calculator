/**
 * This function auto focus the equation input on start
 */
function focusEquationInputOnStart() {
  const operation_input = document.querySelector(".equation-input");
  operation_input.focus();
}
document.addEventListener("DOMContentLoaded", focusEquationInputOnStart);
document.addEventListener("click", focusEquationInputOnStart);
