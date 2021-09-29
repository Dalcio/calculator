function buildProgrammingKeyboard() {
  /* ==== conversions field ==== */
  const conversions_field = programmingConversions();
  /* end conversions */

  // ==== bits ====
  const bits = binaryValue();

  /* ==== scripts ==== */
  const subscript = createElementKey("&downarrow;n", "subscript", () => {});
  const superscript = createElementKey("&uparrow;n", "superscript", () => {});
  /* end scripts */

  // ==== dot ====
  const dot = createElementKey(".", "dot", () => {});

  // ==== memory ====
  const memory_wrapper = memoryWrapper();

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

  /* ==== shifts ==== */
  const shift_left = createElementKey(
    "«<span>&dtrif;</span>",
    "shift-left",
    () => {}
  );
  const shift_right = createElementKey(
    "»<span>&dtrif;</span>",
    "shift-right",
    () => {}
  );
  /* end shifts */

  // ==== insert a character code ====
  const character_code = insertCharacterCode();

  /* ==== alpha keys ==== */
  const alpha_keys = [];
  "a b c d e f".split(" ").forEach((alpha_key) => {
    alpha_keys.push(
      createElementKey(alpha_key.toUpperCase(), `alpha-${alpha_key}`, () => {})
    );
  });
  /* end alpha keys ==== */

  /* ==== numbers ==== */
  const numbers = [];
  "0 1 2 3 4 5 6 7 8 9".split(" ").forEach((number) => {
    numbers.push(createElementKey(number, `number-${number}`, () => {}));
  });
  /* end  */

  /* ==== operations ==== */
  const add = createElementKey("&plus;", "add", () => {});
  const multiply = createElementKey("&times;", "multiply", () => {});
  const subtract = createElementKey("&minus;", "subtract", () => {});
  const division = createElementKey("&divide;", "division");
  /* end operations  */

  // ==== module divide => mod ====
  const module_divide = createElementKey("mod", "module-divide", () => {});

  /* ==== complements ==== */
  const ones_complement = createElementKey("ones", "ones-complement", () => {});
  const twos_complement = createElementKey("twos", "twos-complement", () => {});
  /* end complements  */

  /* ==== booleans operations ==== */
  const boolean_not = createElementKey("NOT", "boolean-not", () => {});
  const boolean_and = createElementKey("AND", "boolean-and", () => {});
  const boolean_or = createElementKey("OR", "boolean-or", () => {});
  const boolean_exclusive_or = createElementKey(
    "XOR",
    "boolean-exclusive-or",
    () => {}
  );
  /* end booleans operations  */

  // ==== clear display ====
  const clear_display = createElementKey("C", "clear-display", clearDisplay);

  // ==== equal ====
  const equal = createElementKey("&equals;", "equal", handleEqual);

  // ==== square root ====
  const square_root = createElementKey("&Sqrt;", "square-root", () => {});

  // ==== exponent[^ or **]  ====
  const exponent = createElementKey("x<sup>y</sup>", "exponent", () => {});

  // ==== inverse ====
  const inverse = createElementKey("x<sup>-1</sup>", "inverse", () => {});

  // ==== absolute value ====
  const absolute_value = createElementKey("|x|", "absolute-value", () => {});

  /* ==== logarithms ==== */
  const logarithm = createElementKey("log", "logarithm", () => {});
  const binary_logarithm = createElementKey(
    "log<sub>2</sub>",
    "binary-logarithm",
    () => {}
  );
  /* end logarithms */

  // ==== factorize ====
  const factorize = createElementKey("a&Cross;b", "factorize", () => {});

  // ==== factorial ====
  const factorial = createElementKey("x!", "factorial", () => {});

  /* ==== component ==== */
  const fractional_component = createElementKey(
    "frac",
    "fractional-component",
    () => {}
  );
  const integer_component = createElementKey(
    "int",
    "integer-component",
    () => {}
  );
  /* end component */

  /* ==== appending elements on programming keyboard ==== */
  const programming_keyboard = document.createElement("main");
  programming_keyboard.classList.add("keyboard");
  programming_keyboard.classList.add("programming-keyboard");

  // conversions
  programming_keyboard.appendChild(conversions_field);

  // bits
  programming_keyboard.appendChild(bits);

  // scripts
  programming_keyboard.appendChild(subscript);
  programming_keyboard.appendChild(superscript);

  // dot
  programming_keyboard.appendChild(dot);

  // memory
  programming_keyboard.appendChild(memory_wrapper);

  // brackets
  programming_keyboard.appendChild(left_angle_bracket);
  programming_keyboard.appendChild(right_angle_bracket);

  // shifts
  programming_keyboard.appendChild(shift_left);
  programming_keyboard.appendChild(shift_right);

  // insert a character code
  programming_keyboard.appendChild(character_code);

  // alpha keys
  alpha_keys.forEach((alpha_key) => {
    programming_keyboard.appendChild(alpha_key);
  });

  // numbers
  numbers.forEach((number) => {
    programming_keyboard.appendChild(number);
  });

  // operations
  programming_keyboard.appendChild(add);
  programming_keyboard.appendChild(multiply);
  programming_keyboard.appendChild(subtract);
  programming_keyboard.appendChild(division);

  // module divide
  programming_keyboard.appendChild(module_divide);

  // complements
  programming_keyboard.appendChild(ones_complement);
  programming_keyboard.appendChild(twos_complement);

  // booleans operations
  programming_keyboard.appendChild(boolean_not);
  programming_keyboard.appendChild(boolean_and);
  programming_keyboard.appendChild(boolean_or);
  programming_keyboard.appendChild(boolean_exclusive_or);

  // clear display
  programming_keyboard.appendChild(clear_display);

  // equal
  programming_keyboard.appendChild(equal);

  // square root
  programming_keyboard.appendChild(square_root);

  // exponent
  programming_keyboard.appendChild(exponent);

  // inverse
  programming_keyboard.appendChild(inverse);

  // absolute value
  programming_keyboard.appendChild(absolute_value);

  // logarithms
  programming_keyboard.appendChild(logarithm);
  programming_keyboard.appendChild(binary_logarithm);

  // factorize
  programming_keyboard.appendChild(factorize);

  // factorial
  programming_keyboard.appendChild(factorial);

  // component
  programming_keyboard.appendChild(fractional_component);
  programming_keyboard.appendChild(integer_component);

  /* end appending elements on programming keyboard */

  return programming_keyboard;
}

function programmingConversions() {
  const conversions = document.createElement("div");
  conversions.classList.add("conversions");
  conversions.classList.add("programming-conversions");

  return conversions;
}

function binaryValue() {
  const binary = document.createElement("div");
  binary.classList.add("binary");

  return binary;
}

function insertCharacterCode() {
  const insert_character_code = createElementKey(
    "á",
    "insert-character-code",
    () => {}
  );

  return insert_character_code;
}
