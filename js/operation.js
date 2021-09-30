/* ==== global variables ==== */

/* end global variables */

// ==== handle the expression ====
const input_expression = document.querySelector("div.operation");
// const fake_input = document.querySelector("div.operation + input");

function removeBreakLines(str) {
  ["<pre>", "</pre>", "\n", "<br/>", "<br>"].forEach((break_line_code) => {
    str = str.replace(break_line_code, "");
  });
  return str;
}

input_expression.addEventListener("keypress", (event) => {
  if (event.which === 13) {
    event.preventDefault();
  }
  if (event.key === "Enter") {
    handleEqual();
  }
});

// ==== equal function ====
function handleEqual() {
  const expression = document.querySelector("div.operation").textContent;

  if (expression) {
    const result = execExpression(expression);

    // creating the operation div
    const equation = document.createElement("div");
    equation.classList.add("equation");
    equation.innerHTML = `<div class="operation-result">${expression}</div><div class="equal-to">=</div><div class="result">${result}</div>`;

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
  const display = document.querySelector("div.operation");
  display.innerHTML = "";
}

/**
 * exec the expression and return the result of that operation
 * @param {*} expression
 * @returns
 */
function execExpression(expression) {
  const formatted_expression = formatExpression(expression);
  const res = eval(formatted_expression);

  return res.toFixed(4);
}

/**
 *
 * @param {*} expression
 * @returns
 */
function formatExpression(expression) {
  [
    { not: "×", yes: "*" },
    { not: "÷", yes: "/" },
    { not: "−", yes: "-" },
  ].forEach(({ not, yes }) => {
    expression = expression.replace(not, yes);
  });
  return expression;
}
