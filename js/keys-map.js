const default_keys = {
  "left-angle-bracket": "(",
  "right-angle-bracket": ")",

  percentage: "%",
  subtract: "-",
  division: "/",
  add: "+",
  multiply: "*",

  "number-0": 0,
  "number-1": 1,
  "number-2": 2,
  "number-3": 3,
  "number-4": 4,
  "number-5": 5,
  "number-6": 6,
  "number-7": 7,
  "number-8": 8,
  "number-9": 9,

  dot: ".",
};

const functions_keys = {
  // done
  "square-root": "√(",

  // done
  square: "^(2)",
  exponent: "^(",

  // done
  sine: "sin(",
  cosine: "cos(",
  tangent: "tan(",

  // done
  logarithm: "log(",
  "natural-logarithm": "ln(",

  // done
  "euler-power": "ℯ^(",

  "absolute-value": "|",

  // done
  factorial: "!",

  // done
  pi: "π",
  euler: "ℯ",

  // done
  "cubic-root": "cbrt(",

  // done
  "inverse-sine": "asin(",
  "inverse-cosine": "acos(",
  "inverse-tangent": "atan(",

  "hyperbolic-sine": "sinh(",
  "hyperbolic-cosine": "cosh(",
  "hyperbolic-tangent": "tanh(",

  "inverse-hyperbolic-sine": "asinh(",
  "inverse-hyperbolic-cosine": "acosh(",
  "inverse-hyperbolic-tangent": "atanh(",
};

const all_keys = {
  ...default_keys,
  ...functions_keys,
};
