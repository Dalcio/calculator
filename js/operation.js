/* ==== global variables ==== */

/* end global variables */

// ==== handle the expression ====
const input_expression = document.querySelector("input.operation");

input_expression.addEventListener("input", ({ data }) => {
  console.log(data);
});

input_expression.addEventListener("keypress", ({ key }) => {
  if (key === "Enter") {
    handleEqual();
  }
});

// ==== equal function ====
function handleEqual() {
  const expression = document.querySelector("input.operation").value;
  if (expression) {
    const result = execExpression(expression);

    // creating the operation div
    const equation = document.createElement("div");
    equation.classList.add("equation");
    equation.innerHTML = `<div class="operation">${expression}</div><div class="equal-to">=</div><div class="result">${result}</div>`;

    // appending the result to result field
    const results_container = document.querySelector("div.results");
    results_container.appendChild(equation);
    results.push({
      expression,
      result,
    });

    // scroll to end the result container
    results_container.scrollTop = results_container.scrollHeight;
    // debugger
  }
}

/**
 * clear the input field
 */
function clearDisplay() {
  const display = document.querySelector("input.operation");
  display.value = "";
}

/**
 * exec the expression and return the result of that operation
 * @param {*} expression
 * @returns
 */
function execExpression(expression) {
  const formatted_expression = formatExpression(expression);
  const res = eval(formatted_expression);
  Number();
  return res.toFixed(4);
}

/**
 *
 * @param {*} expression
 * @returns
 */
function formatExpression(expression) {
  return expression;
}
