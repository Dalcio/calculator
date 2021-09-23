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
  }

  if (listener) {
    element.addEventListener("click", listener);
  }

  return element;
}

function buildBasicKeyboard() {
  /* ==== brackets ==== */
  const left_angle_bracket = createElementKey(
    "(",
    "left-angle-bracket",
    () => {}
  );
  const right_angle_bracket = createElementKey(
    ")",
    "right-angle-bracket",
    () => {}
  );
  /* end brackets */

  /* ==== squares ==== */
  const square = createElementKey("x<sup>2</sup>", "square", () => {});
  const square_root = createElementKey("&Sqrt;", "square-root", () => {});
  /* end  */

  /* ==== operations ==== */
  const add = createElementKey("&plus;", "add", () => {});
  const multiply = createElementKey("&times;", "multiply", () => {});
  const subtract = createElementKey("&minus;", "subtract", () => {});
  const division = createElementKey("&divide;", "division");
  const percentage = createElementKey("&percnt;", "percentage", () => {});
  /* end  */

  /* ==== numbers ==== */
  const numbers = [];
  "0 1 2 3 4 5 6 7 8 9".split(" ").forEach((number) => {
    numbers.push(createElementKey(number, `number-${number}`, () => {}));
  });
  /* end  */

  /* ==== others ==== */
  const clear_display = createElementKey("C", "clear-display", () => {});
  const undo = createElementKey("&cularr;", "undo", () => {});
  const dot = createElementKey(".", "dot", () => {});
  const equal = createElementKey("&equals;", "equal", () => {});
  /* end  */

  /* appending elements on keyboard */
  const basic_keyboard = document.createElement("main");
  basic_keyboard.classList.add("keyboard");
  basic_keyboard.classList.add("basic-keyboard");

  // brackets
  basic_keyboard.appendChild(left_angle_bracket);
  basic_keyboard.appendChild(right_angle_bracket);

  // squares
  basic_keyboard.appendChild(square);
  basic_keyboard.appendChild(square_root);

  // operations
  basic_keyboard.appendChild(add);
  basic_keyboard.appendChild(multiply);
  basic_keyboard.appendChild(subtract);
  basic_keyboard.appendChild(division);
  basic_keyboard.appendChild(percentage);

  // appending numbers
  numbers.forEach((number) => {
    basic_keyboard.appendChild(number);
  });

  // others
  basic_keyboard.appendChild(clear_display);
  basic_keyboard.appendChild(undo);
  basic_keyboard.appendChild(dot);
  basic_keyboard.appendChild(equal);

  /* end keyboard */

  return basic_keyboard;
}
