/**
 * Resolves the equation and shows the result
 */
function resolveTheEquation() {
  try {
    const expression = document.querySelector(".equation-input").value;

    if (!expression) return;
    const result_html = document.querySelector(".result-container > .result");

    let formatted_expression = expression.replace("^", "**");

    formatted_expression = formatted_expression.replace(/√\(/g, "sqrt(");

    /**
     * replaces for examples √9536 with sqrt(9536) function
     * @param {string} str
     */
    const replaceSqrt = (str) => {
      const matches = str.match(/√\w/g);

      if (matches && matches.length > 0) {
        matches.forEach((match) => {
          const value = match.replace(/√/g, "");
          str = str.replace(match, `sqrt(${value})`);
        });
      }

      return str;
    };

    formatted_expression = replaceSqrt(formatted_expression);

    /**
     * replaces the |-64| to abs(-64)
     * @param {string} str
     */
    const replaceAbs = (str) => {
      const pattern = /\|(\w*|(\([\w|\)|\(|\-|\*|\/|\+|\d]*\)))\|/g;
      const matches = str.match(pattern);

      if (matches && matches.length > 0) {
        matches.forEach((match) => {
          const value = match
            .replace(/(\|\({0,1}|\|)/, "")
            .replace(/\){0,1}\|$/g, "");
          str = str.replace(match, `abs(${value})`);
        });
      }

      return str;
    };

    formatted_expression = replaceAbs(formatted_expression);

    /**
     * replaces the 5! to fact(5)
     * @param {string} str
     */
    const replaceFact = (str) => {
      const pattern = /(\w*|(\([\w|\)|\(|\-|\*|\/|\+|\d]*\)))!/g;
      const matches = str.match(pattern);

      if (matches && matches.length > 0) {
        matches.forEach((match) => {
          const value = match.replace(/\){0,1}!$/g, "").replace(/\({0,1}/, "");
          str = str.replace(match, `fact(${value})`);
        });
      }

      return str;
    };

    formatted_expression = replaceFact(formatted_expression);

    /**
     * replaces the 5% to percent(5)
     * @param {string} str
     */
    const replacePercent = (str) => {
      const pattern = /(\w*|(\([\w|\)|\(|\-|\*|\/|\+|\d]*\)))%/g;
      const matches = str.match(pattern);

      if (matches && matches.length > 0) {
        matches.forEach((match) => {
          const value = match.replace(/\){0,1}%$/g, "").replace(/\({0,1}/, "");
          str = str.replace(match, `percent(${value})`);
        });
      }

      return str;
    };

    formatted_expression = replacePercent(formatted_expression);

    // format constants
    formatted_expression = formatted_expression.replace("ℯ", Math.E);
    formatted_expression = formatted_expression.replace("π", Math.PI);

    // ==== sine functions ====
    const { sin, asin, sinh, asinh } = Math;
    // ==== cosine functions ====
    const { cos, acos, cosh, acosh } = Math;
    // ==== tangent functions ====
    const { tan, atan, tanh, atanh } = Math;
    // ==== logarithms functions ====
    const log = Math.log10;
    const ln = Math.log;
    // ==== roots functions ====
    const { sqrt, cbrt } = Math;
    // ==== absolute value  functions ====
    const { abs } = Math;

    const percent = (n) => {
      return Number(n) / 100;
    };

    const fact = (n) => {
      function factorial(x) {
        if (x === 0) return 1;
        return x * factorial(x - 1);
      }

      return factorial(Number(n));
    };

    const result = eval(formatted_expression);
    result_html.textContent = result;
    storeHistoryItem({ expression, result });
  } catch (error) {
    const messages = document.querySelector(".messages");
    messages.style.display = "block";
    messages.textContent = error.message;
  }
}
