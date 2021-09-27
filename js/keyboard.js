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

/**
 * replaces the current keyboard with basic keyboard
 * @param {*} main_keyboard the node element where the basic keyboard will be appended
 */
function basicKeyboardMode(main_keyboard) {
  const basic_keyboard = buildBasicKeyboard();

  main_keyboard.replaceWith(basic_keyboard);
}

/**
 * replaces the current keyboard with advanced keyboard
 * @param {*} main_keyboard the node element where the advanced keyboard will be appended
 */
function advancedKeyboardMode(main_keyboard) {
  const advanced_keyboard = buildAdvancedKeyboard();

  main_keyboard.replaceWith(advanced_keyboard);
}

/**
 * replaces the current keyboard with financial keyboard
 * @param {*} main_keyboard the node element where the financial keyboard will be appended
 */
function financialKeyboardMode(main_keyboard) {
  const financial_keyboard = buildFinancialKeyboard();

  main_keyboard.replaceWith(financial_keyboard);
}

/**
 * replaces the current keyboard with programming keyboard
 * @param {*} main_keyboard the node element where the programming keyboard will be appended
 */
function programmingKeyboardMode(main_keyboard) {
  const programming_keyboard = buildProgrammingKeyboard();

  main_keyboard.replaceWith(programming_keyboard);
}
