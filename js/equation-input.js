/**
 * This function auto focus the equation input on start
 */
function focusEquationInputOnStart() {
  const operation_input = document.querySelector(".equation-input");
  operation_input.focus();
}
document.addEventListener("DOMContentLoaded", focusEquationInputOnStart);
document.addEventListener("click", focusEquationInputOnStart);

/**
 * remove the error message
 */
(function removeErrorBox() {
  const operation_input = document.querySelector(".equation-input");
  operation_input.addEventListener("keypress", () => {
    const messages = document.querySelector(".messages");
    if (messages.style.display === "block") {
      messages.textContent = "";
      messages.style.display = "none";
    }
  });
})();
