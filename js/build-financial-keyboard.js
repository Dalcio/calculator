/**
 * returns an html element containing the financial keyboard keys
 */
function buildFinancialKeyboard() {
  /* ==== conversions field ==== */
  const conversions_field = financialConversions();
  /* end conversions */

  // ==== basic keys ====
  const basic_keyboard = buildBasicKeyboard();

  // ==== memory ====
  const memory_wrapper = memoryWrapper();

  // ==== exponent[^ or **]  ====
  const exponent = createElementKey("x<sup>y</sup>", "exponent", () => {});

  // ==== logarithm ====
  const logarithm = createElementKey("log", "logarithm", () => {});

  /* ==== financial operations ==== */
  const compounding_term = createElementKey(
    "Ctrm",
    "compounding-term",
    () => {}
  );
  const gross_profit_margin = createElementKey(
    "Gpm",
    "gross-profit-margin",
    () => {}
  );
  const periodic_intersect_rate = createElementKey(
    "Rate",
    "periodic-intersect-rate",
    () => {}
  );
  const double_declining_depreciation = createElementKey(
    "Ddb",
    "double-declining-depreciation",
    () => {}
  );
  const periodic_payment = createElementKey(
    "Pmt",
    "periodic-payment",
    () => {}
  );
  const straight_line_depreciation = createElementKey(
    "Sln",
    "straight-line-depreciation",
    () => {}
  );
  const financial_term = createElementKey("Term", "financial-term", () => {});
  const future_value = createElementKey("Fv", "future-value", () => {});
  const present_value = createElementKey("Pv", "present-value", () => {});
  const sum_of_the_years_digits_depreciation = createElementKey(
    "Syd",
    "sum-of-the-years-digits-depreciation",
    () => {}
  );
  /* end financial operations */

  /* ==== appending elements on financial keyboard ==== */
  const financial_keyboard = document.createElement("main");
  financial_keyboard.classList.add("keyboard");
  financial_keyboard.classList.add("financial-keyboard");

  // conversions field
  financial_keyboard.appendChild(conversions_field);

  // basic keyboard
  [...basic_keyboard.children].forEach((basic_child) => {
    if (!basic_child.classList.contains("square")) {
      financial_keyboard.appendChild(basic_child);
    }
  });

  // memory
  financial_keyboard.appendChild(memory_wrapper);

  // exponent
  financial_keyboard.appendChild(exponent);

  // logarithms
  financial_keyboard.appendChild(logarithm);

  // financial operations
  financial_keyboard.appendChild(compounding_term);
  financial_keyboard.appendChild(gross_profit_margin);
  financial_keyboard.appendChild(periodic_intersect_rate);
  financial_keyboard.appendChild(double_declining_depreciation);
  financial_keyboard.appendChild(periodic_payment);
  financial_keyboard.appendChild(straight_line_depreciation);
  financial_keyboard.appendChild(financial_term);
  financial_keyboard.appendChild(future_value);
  financial_keyboard.appendChild(present_value);
  financial_keyboard.appendChild(sum_of_the_years_digits_depreciation);

  /* end appending elements on financial keyboard */

  return financial_keyboard;
}

function financialConversions() {
  const conversions = document.createElement("div");
  conversions.classList.add("conversions");
  conversions.classList.add("financial-conversions");

  return conversions;
}
