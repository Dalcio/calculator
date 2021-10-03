/* Global Variables */

let history = []; // [{expression, result}]
/* End Global Variables */

/**
 * This function loads the history from local storage
 */
(function loadHistory() {
  document.addEventListener("DOMContentLoaded", () => {
    const stored_history = JSON.parse(localStorage.getItem("history"));

    history = (stored_history && stored_history) || [];
  });
})();

/**
 * add the expression and the result to history global var and save in local storage
 * @param {{ expression: string, result: number }} history_item
 */
function storeHistoryItem({ expression, result }) {
  history.push({ expression, result });

  localStorage.setItem("history", JSON.stringify(history));

  // update the history list
  const history_container = document.querySelector("footer > .history");
  const show = history_container.getAttribute("show");

  if (show === "true") {
    const history_list = document.querySelector(".history-list");

    const li = createHistoryItem({ expression, result });
    history_list.appendChild(li);
  }
}

/**
 *return an <li> element that contain the expression, equal sign and history
 * @param {{ expression: string, result: number }} history_item
 */
function createHistoryItem({ expression, result }) {
  const li = document.createElement("li");
  const span_expression = document.createElement("span");
  const span_equal = document.createElement("span");
  const span_result = document.createElement("span");

  /**
   * replace the current equation input value with given value
   * @param {string} value the value to be replaced in equation input
   */
  const replaceInputValue = (value) => {
    const equation_input = document.querySelector(".equation-input");

    equation_input.value = value;
  };

  span_expression.textContent = expression;
  span_expression.addEventListener("click", () =>
    replaceInputValue(expression)
  );

  span_equal.textContent = "=";

  span_result.textContent = result;
  span_result.addEventListener("click", () => replaceInputValue(result));

  li.appendChild(span_expression);
  li.appendChild(span_equal);
  li.appendChild(span_result);

  return li;
}

/**
 * this function show and hide the history container
 */
(function handleHistory() {
  const history_btn = document.querySelector("button#history");

  history_btn.addEventListener("click", () => {
    const history_container = document.querySelector("footer > .history");
    const show = history_container.getAttribute("show");

    if (show === "true") {
      history_container.setAttribute("show", "false");
      setTimeout(() => {
        history_container.style.display = "none";
      }, 400);
    } else {
      if (history.length > 0) {
        updateHistoryList();
      }
      history_container.style.display = "flex";
      history_container.setAttribute("show", "true");
    }
  });
})();

function updateHistoryList() {
  const history_list = document.querySelector(".history-list");
  history_list.innerHTML = "";

  for ({ expression, result } of history) {
    const li = createHistoryItem({ expression, result });
    history_list.appendChild(li);
  }
}

/**
 * Clear the history
 */
(function clearHistory() {
  const clear_display = document.querySelector(".clear-history");

  clear_display.addEventListener("click", () => {
    history = [];
    localStorage.removeItem("history")
    document.querySelector(".history-list").innerHTML = "";
    document.querySelector("button#history").click();
  });
})();
