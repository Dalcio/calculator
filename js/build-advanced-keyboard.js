/**
 * returns an html element containing the advanced keyboard keys.
 */
function buildAdvancedKeyboard() {
  /* ==== conversions field ==== */
  const conversions_field = advancedConversions();
  /* end conversions */

  // ==== basic keys ====
  const basic_keyboard = buildBasicKeyboard();

  /* ==== scripts ==== */
  const subscript = createElementKey("&downarrow;n", "subscript", () => {});
  const superscript = createElementKey("&downarrow;n", "superscript", () => {});
  /* end scripts */

  // ==== scientific exponent ====
  const scientific_exponent = createElementKey(
    "&Cross;10<sup>y</sup>",
    "scientific-exponent",
    () => {}
  );

  // ==== module divide => mod ====
  const module_divide = createElementKey("mod", "module-divide", () => {});

  // ==== memory ====
  const memory_wrapper = memoryWrapper();

  /* ==== constants ==== */
  const pi = createElementKey("&pi;", "pi", () => {});
  const euler = createElementKey("&escr;", "euler", () => {});
  /* end constants */

  // ==== factorize ====
  const factorize = createElementKey("a&Cross;b", "factorize", () => {});

  /* ==== complex numbers ==== */
  const imaginary = createElementKey("i", "imaginary", () => {});
  const re = createElementKey("Re", "real-component", () => {});
  const im = createElementKey("Im", "imaginary-component", () => {});
  const conj = createElementKey("conj", "complex-conjugate", () => {});
  const arg = createElementKey("Arg", "complex-argument", () => {});
  /* end complex numbers  */

  // ==== additional function ====
  const additional_functions = additionalFunctions();

  // ==== exponent[^ or **]  ====
  const exponent = createElementKey("x<sup>y</sup>", "exponent", () => {});

  // ==== inverse ====
  const inverse = createElementKey("x<sup>-1</sup>", "inverse", () => {});

  // ==== factorial ====
  const factorial = createElementKey("x!", "factorial", () => {});

  /* ==== logarithms */
  const logarithm = createElementKey("log", "logarithm", () => {});
  const natural_logarithm = createElementKey(
    "ln",
    "natural-logarithm",
    () => {}
  );
  /* end logarithms */

  // ==== absolute value ====
  const absolute_value = createElementKey("|x|", "absolute-value", () => {});

  /* ==== trigonometry functions ==== */
  const sin = createElementKey("sin", "sin", () => {});
  const cos = createElementKey("cos", "cos", () => {});
  const tan = createElementKey("tan", "tan", () => {});
  const sinh = createElementKey("sinh", "sinh", () => {});
  const cosh = createElementKey("cosh", "cosh", () => {});
  const tanh = createElementKey("tanh", "tanh", () => {});
  /* end trigonometry functions */

  /* ==== appending elements on advanced keyboard ==== */
  const advanced_keyboard = document.createElement("main");
  advanced_keyboard.classList.add("keyboard");
  advanced_keyboard.classList.add("advanced-keyboard");

  // conversions field
  advanced_keyboard.appendChild(conversions_field);

  // basic keyboard
  [...basic_keyboard.children].forEach((basic_child) => {
    advanced_keyboard.appendChild(basic_child);
  });

  // scripts
  advanced_keyboard.appendChild(subscript);
  advanced_keyboard.appendChild(superscript);

  // scientific exponent
  advanced_keyboard.appendChild(scientific_exponent);

  // module divide
  advanced_keyboard.appendChild(module_divide);

  // memory
  advanced_keyboard.appendChild(memory_wrapper);

  // constants
  advanced_keyboard.appendChild(pi);
  advanced_keyboard.appendChild(euler);

  // factorize
  advanced_keyboard.appendChild(factorize);

  // complex numbers
  advanced_keyboard.appendChild(imaginary);
  advanced_keyboard.appendChild(re);
  advanced_keyboard.appendChild(im);
  advanced_keyboard.appendChild(conj);
  advanced_keyboard.appendChild(arg);

  // additional function
  advanced_keyboard.appendChild(additional_functions);

  // exponent
  advanced_keyboard.appendChild(exponent);

  // inverse
  advanced_keyboard.appendChild(inverse);

  // factorial
  advanced_keyboard.appendChild(factorial);

  // logarithms
  advanced_keyboard.appendChild(logarithm);
  advanced_keyboard.appendChild(natural_logarithm);

  // absolute value
  advanced_keyboard.appendChild(absolute_value);

  // trigonometry functions
  advanced_keyboard.appendChild(sin);
  advanced_keyboard.appendChild(cos);
  advanced_keyboard.appendChild(tan);
  advanced_keyboard.appendChild(sinh);
  advanced_keyboard.appendChild(cosh);
  advanced_keyboard.appendChild(tanh);

  /* end appending elements on advanced keyboard */

  return advanced_keyboard;
}

function advancedConversions() {
  const conversions = document.createElement("div");
  conversions.classList.add("conversions");

  return conversions;
}

function memoryWrapper() {
  const memory_wrapper = createElementKey(
    "<span>x</span><span>&dtrif;</span>",
    "memory",
    () => {}
  );

  return memory_wrapper;
}

function additionalFunctions() {
  const element = createElementKey(
    "f(x) &dtrif;",
    "additional-functions",
    () => {}
  );
  return element;
}
