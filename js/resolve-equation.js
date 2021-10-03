/**
 * Resolves the equation and shows the result
 */
function resolveTheEquation() {
  try {
    const expression = document.querySelector(".equation-input").value;

    if (!expression) return;

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
      const pattern =
        /\|([\w|\)|\(|\-|\*|\/|\+|\d]*|(\([\w|\)|\(|\-|\*|\/|\+|\d]*\)))\|/g;
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

    // remove not allowed char on type chars
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
    const sin = (angle) => {
      const sine = Math.sin(angle);
      if (rad_deg === "rad") return sine;
      return (sine * 180) / Math.PI;
    };

    const asin = (angle) => {
      const arc_sine = Math.asin(angle);
      if (rad_deg === "rad") return arc_sine;
      return (arc_sine * 180) / Math.PI;
    };

    const sinh = (angle) => {
      const sine_hyp = Math.sinh(angle);
      if (rad_deg === "rad") return sine_hyp;
      return (sine_hyp * 180) / Math.PI;
    };

    const asinh = (angle) => {
      const arc_sine_hyp = Math.asinh(angle);
      if (rad_deg === "rad") return arc_sine_hyp;
      return (arc_sine_hyp * 180) / Math.PI;
    };
    // ==== cosine functions ====
    const cos = (angle) => {
      const cos = Math.cos(angle);
      if (rad_deg === "rad") return cos;
      return (cos * 180) / Math.PI;
    };

    const acos = (angle) => {
      const arc_cos = Math.acos(angle);
      if (rad_deg === "rad") return arc_cos;
      return (arc_cos * 180) / Math.PI;
    };

    const cosh = (angle) => {
      const cos_hyp = Math.cosh(angle);
      if (rad_deg === "rad") return cos_hyp;
      return (cos_hyp * 180) / Math.PI;
    };

    const acosh = (angle) => {
      const arc_cos_hyp = Math.acosh(angle);
      if (rad_deg === "rad") return arc_cos_hyp;
      return (arc_cos_hyp * 180) / Math.PI;
    };
    // ==== tangent functions ====
    const tan = (angle) => {
      const tangent = Math.tan(angle);
      if (rad_deg === "rad") return tangent;
      return (tangent * 180) / Math.PI;
    };

    const atan = (angle) => {
      const arc_tangent = Math.atan(angle);
      if (rad_deg === "rad") return arc_tangent;
      return (arc_tangent * 180) / Math.PI;
    };

    const tanh = (angle) => {
      const tangent_hyp = Math.tanh(angle);
      if (rad_deg === "rad") return tangent_hyp;
      return (tangent_hyp * 180) / Math.PI;
    };

    const atanh = (angle) => {
      const arc_tangent_hyp = Math.atanh(angle);
      if (rad_deg === "rad") return arc_tangent_hyp;
      return (arc_tangent_hyp * 180) / Math.PI;
    };

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

    /**
     * @type {number | string} result
     */
    let result = eval(formatted_expression);
    const result_html = document.querySelector(".result-container > .result");

    if (Number.isFinite(result)) {
      if (result.toString().match(/e/)) {
        result = result.toExponential();
      } else if (result.toString().includes(".")) {
        result = result.toFixed(
          Math.min(
            result.toString().split(".")[1].length,
            (result.toString().split(".")[0].length <= 4 && 4) || 0
          )
        );
      } else {
        result = result.toFixed();
      }
    }

    result_html.textContent = result;
    storeHistoryItem({ expression, result });
  } catch (error) {
    const messages = document.querySelector(".messages");
    messages.style.display = "block";
    messages.textContent = error.message;
  }
}
