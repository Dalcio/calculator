/**
 * Resolves the equation and shows the result
 */
function resolveTheEquation() {
  try {
    const expression = document.querySelector(".equation-input").value;

    if (!expression) return;

    const result = 0;
    storeHistoryItem({ expression, result });
    debugger;
    // solve the equation
  } catch (error) {
    const messages = document.querySelector(".messages");
    messages.getElementsByClassName.display = "block";
    messages.textContent = error;
  }
}
