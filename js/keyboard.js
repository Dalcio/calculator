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

function basicKeyboardMode(main_keyboard) {
  const basic_keyboard = buildBasicKeyboard();
  // main_keyboard.classList.remove(["", ""]);
  // main_keyboard.classList.add("basic-keyboard");

  main_keyboard.replaceWith(basic_keyboard);
  main_keyboard.innerHTML = "";
  main_keyboard.replaceWith(basic_keyboard);
}

function advancedKeyboardMode(main_keyboard) {
  const advanced_keyboard = buildAdvancedKeyboard();
  // main_keyboard.classList.remove(["", ""]);
  // main_keyboard.classList.add("advanced-keyboard");

  main_keyboard.replaceWith(advanced_keyboard);
}

function financialKeyboardMode(main_keyboard) {}

function programmingKeyboardMode(main_keyboard) {}
