/**
 * this function show and hide the history container
 */
(function handleHistory() {
  const history_btn = document.querySelector("button#history");

  history_btn.addEventListener("click", () => {
    const history_container = document.querySelector("footer > .history");
    const show = history_container.getAttribute("show");
    if (show === "true") {
      history_container.setAttribute("show", "false");
      setTimeout(() => {
        history_container.style.display = "none";
      }, 400);
    } else {
      history_container.style.display = "block";
      history_container.setAttribute("show", "true");
    }
  });
})();
