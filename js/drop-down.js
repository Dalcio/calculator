const drop_down_btn = document.querySelector(".dropdown-select > .drop-btn");

drop_down_btn.addEventListener("click", function ({ target }) {
  const active = target.getAttribute("active") === "true";
  target.setAttribute("active", (active && "false") || "true");
});

document.addEventListener("click", ({ target }) => {
  const main_keyboard = document.querySelector("main.keyboard");
  if (drop_down_btn.getAttribute("active") === "true") {
    if (
      target.hasAttribute("selected") &&
      [...target.classList].includes("option")
    ) {
      // disabling the current active
      const current_active = document.querySelector(
        `.dropdown-select > .options > .option[value="${drop_down_btn.getAttribute(
          "value"
        )}"]`
      );

      // active the current element
      current_active.setAttribute("selected", "false");
      drop_down_btn.textContent = target.textContent;
      const value = target.getAttribute("value");
      drop_down_btn.setAttribute("value", value);
      target.setAttribute("selected", "true");

      // storing on local storage
      window.localStorage["current-calculator-mode"] = value;

      // setting the current keyboard mode
      if (value === "basic") {
        basicKeyboardMode(main_keyboard);
      } else if (value === "advanced") {
        advancedKeyboardMode(main_keyboard);
      } else if (value === "financial") {
        financialKeyboardMode(main_keyboard);
      } else if (value === "programming") {
        programmingKeyboardMode(main_keyboard);
      }

      // closing the dropdown
      drop_down_btn.setAttribute("active", "false");
    } else if (!target.hasAttribute("active") && target.id !== "drop-btn") {
      drop_down_btn.setAttribute("active", "false");
    }
  }
});
