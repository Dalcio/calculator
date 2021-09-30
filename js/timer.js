(function handleTime() {
  const now = new Date().toUTCString().replace(/GMT/g, "");
  const timer = document.querySelector("header.timer");
  timer.textContent = now;
  setTimeout(() => {
    handleTime();
  }, 1000);
})();
