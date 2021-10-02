/**
 * Creates an instance of the element for the specified tag.
 * @param {*} content - The content is a string or an object containing an innerHTML content te of an element.
 * @param {*} _class - The class of an element. String or array of string
 * @param {*} listener - Sets the callback that will be invoked when the button will be clicked.
 * @returns the element
 */
function createElementKey(content, _class, listener) {
  const element = document.createElement("button");

  element.innerHTML = content;

  element.classList.add("key");

  if (typeof _class === "string") {
    element.classList.add(_class);
  } else {
    throw new Error("it is not a valid class");
  }

  if (listener) {
    element.addEventListener("click", listener);
  } else {
    element.addEventListener("click", () => handleKeys(_class));
  }

  return element;
}

/**
 * returns an html element containing the basic keyboard keys.
 */
function staticKeys() {
  // ==== clear display ====
  const clear_display = createElementKey("C", "clear-display", clearDisplay);

  // ==== positive negative ====
  const positive_negative = createElementKey(
    "&PlusMinus;",
    "positive-negative"
  );

  /* ==== brackets ==== */
  const left_angle_bracket = createElementKey("(", "left-angle-bracket");
  const right_angle_bracket = createElementKey(")", "right-angle-bracket");
  /* end brackets */

  // ==== percentage ====
  const percentage = createElementKey("%", "percentage");

  /* ==== operators ==== */
  const division = createElementKey("/", "division");
  const multiply = createElementKey("&times;", "multiply");
  const add = createElementKey("+", "add");
  const subtract = createElementKey("-", "subtract");
  /* end  */

  // ==== equal ====
  const equal = createElementKey("=", "equal", handleEqual);

  // ==== left keyboard ====
  const left_keyboard = document.createElement("div");
  left_keyboard.classList.add("left-keyboard");

  /* ==== appending elements on keyboard ==== */
  const keyboard = document.querySelector(".keyboard");

  // clear display
  keyboard.appendChild(clear_display);
  // positive negative
  keyboard.appendChild(positive_negative);
  // brackets
  keyboard.appendChild(left_angle_bracket);
  keyboard.appendChild(right_angle_bracket);
  // percentage
  keyboard.appendChild(percentage);
  // operators
  keyboard.appendChild(add);
  keyboard.appendChild(multiply);
  keyboard.appendChild(subtract);
  keyboard.appendChild(division);
  // equal
  keyboard.appendChild(equal);
  // left keyboard
  keyboard.appendChild(left_keyboard);
  /* end appending elements on keyboard  */
}

/**
 * number keyboard
 */
function defaultKeyboard() {
  /* ==== numbers ==== */
  const numbers = [];
  "0 1 2 3 4 5 6 7 8 9".split(" ").forEach((number) => {
    numbers.push(createElementKey(number, `number-${number}`));
  });
  /* end  */

  // ==== dot ====
  const dot = createElementKey(".", "dot");

  // appending numbers
  const keyboard = document.createElement("div");
  keyboard.classList.add("left-keyboard");
  keyboard.classList.add("default-keyboard");

  // numbers
  numbers.forEach((number) => {
    keyboard.appendChild(number);
  });

  // dot
  keyboard.appendChild(dot);

  return keyboard;
}

/**
 * second keyboard
 */
function secondKeyboard() {
  // ==== rad deg ====
  const rad_deg = createElementKey("Rad", "rad-deg", radDeg);

  // ==== square root ====
  const square_root = createElementKey("&Sqrt;", "square-root");

  /* ==== trigonometry ==== */
  const sine = createElementKey("sin", "sine");
  const cosine = createElementKey("cos", "cosine");
  const tangent = createElementKey("tan", "tangent");
  /* trigonometry */

  /* ==== logarithms ==== */
  const logarithm = createElementKey("log", "logarithm");
  const natural_logarithm = createElementKey("ln", "natural-logarithm");
  /* end logarithms */

  /* ==== exponent ==== */
  const euler_power = createElementKey("&escr;<sup>y</sup>", "euler-power");
  const square = createElementKey("x<sup>2</sup>", "square");
  const exponent = createElementKey("x<sup>y</sup>", "exponent");
  /* end exponent */

  // ==== absolute value ====
  const absolute_value = createElementKey("|x|", "absolute-value");

  /* ==== constants ==== */
  const pi = createElementKey("&pi;", "pi");
  const euler = createElementKey("&escr;", "euler");
  /* end constants */

  // appending numbers
  const keyboard = document.createElement("div");
  keyboard.classList.add("left-keyboard");
  keyboard.classList.add("second-keyboard");

  // rad deg
  // keyboard.appendChild(rad_deg);
  // square root
  keyboard.appendChild(square_root);
  // sine
  keyboard.appendChild(sine);
  // cosine
  keyboard.appendChild(cosine);
  // tangent
  keyboard.appendChild(tangent);
  // logarithm
  keyboard.appendChild(logarithm);
  // natural logarithm
  keyboard.appendChild(natural_logarithm);
  // euler power
  keyboard.appendChild(euler_power);
  // square
  keyboard.appendChild(square);
  // exponent
  keyboard.appendChild(exponent);
  // absolute value
  keyboard.appendChild(absolute_value);
  // pi
  keyboard.appendChild(pi);
  // euler
  keyboard.appendChild(euler);

  return keyboard;
}

/**
 * third keyboard
 */
function thirdKeyboard() {
  // ==== rad deg ====
  const rad_deg = createElementKey("Rad", "rad-deg", radDeg);

  // ==== rad deg ====
  const cubic_root = createElementKey("<sup>3</sup>&Sqrt;x", "cubic-root");

  /* ==== trigonometry ==== */
  const inverse_sine = createElementKey("sin<sup>-1</sup>", "inverse-sine");
  const inverse_cosine = createElementKey("cos<sup>-1</sup>", "inverse-cosine");
  const inverse_tangent = createElementKey(
    "tan<sup>-1</sup>",
    "inverse-tangent"
  );
  // hyperbolic
  const hyperbolic_sine = createElementKey("sinh", "hyperbolic-sine");
  const hyperbolic_cosine = createElementKey("cosh", "hyperbolic-cosine");
  const hyperbolic_tangent = createElementKey("tanh", "hyperbolic-tangent");
  // inverse hyperbolic
  const inverse_hyperbolic_sine = createElementKey(
    "sinh<sup>-1</sup>",
    "inverse-hyperbolic-sine"
  );
  const inverse_hyperbolic_cosine = createElementKey(
    "cosh<sup>-1</sup>",
    "inverse-hyperbolic-cosine"
  );
  const inverse_hyperbolic_tangent = createElementKey(
    "tanh<sup>-1</sup>",
    "inverse-hyperbolic-tangent"
  );
  /* trigonometry */

  // ==== factorial ====
  const factorial = createElementKey("x!", "factorial");

  // appending numbers
  const keyboard = document.createElement("div");
  keyboard.classList.add("left-keyboard");
  keyboard.classList.add("third-keyboard");

  // rad deg
  keyboard.appendChild(rad_deg);
  // cubic root
  keyboard.appendChild(cubic_root);
  // inverse sine
  keyboard.appendChild(inverse_sine);
  // inverse cosine
  keyboard.appendChild(inverse_cosine);
  // inverse tangent
  keyboard.appendChild(inverse_tangent);
  // hyperbolic sine
  keyboard.appendChild(hyperbolic_sine);
  // hyperbolic cosine
  keyboard.appendChild(hyperbolic_cosine);
  // hyperbolic tangent
  keyboard.appendChild(hyperbolic_tangent);
  // inverse hyperbolic sine
  keyboard.appendChild(inverse_hyperbolic_sine);
  // inverse hyperbolic cosine
  keyboard.appendChild(inverse_hyperbolic_cosine);
  // inverse hyperbolic tangent
  keyboard.appendChild(inverse_hyperbolic_tangent);
  // factorial
  keyboard.appendChild(factorial);

  return keyboard;
}
