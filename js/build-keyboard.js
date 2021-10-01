/**
 * Creates an instance of the element for the specified tag.
 * @param {*} content - The content is a string or an object containing an innerHTML content te of an element.
 * @param {*} classes - The class or classes of an element. String or array of string
 * @param {*} listener - Sets the callback that will be invoked when the button will be clicked.
 * @returns the element
 */
function createElementKey(content, classes, listener) {
  const element = document.createElement("button");

  element.innerHTML = content;

  element.classList.add("key");

  if (Array.isArray(classes)) {
    classes.map((_class) => {
      element.classList.add(_class);
    });
  } else if (typeof classes === "string") {
    element.classList.add(classes);
  } else {
    throw new Error("it is not a valid class");
  }

  if (listener) {
    element.addEventListener("click", listener);
  } else {
    element.addEventListener("click", handleBasicKeys);
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
    "+/-",
    "positive-negative",
    positiveNegative
  );

  /* ==== brackets ==== */
  const angles_bracket = createElementKey("( )", "angles-bracket");
  /* end brackets */

  // ==== percentage ====
  const percentage = createElementKey("%", "percentage");

  /* ==== operators ==== */
  const division = createElementKey("/", "division");
  const multiply = createElementKey("*", "multiply");
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
  keyboard.appendChild(angles_bracket);
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

  /* ==== others ==== */
  const undo = createElementKey("&cularr;", "undo", () => {});
  const dot = createElementKey(".", "dot");
  /* end  */

  // appending numbers
  numbers.forEach((number) => {
    keyboard.appendChild(number);
  });
}
