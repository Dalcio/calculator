"use strict";
/* ==== global vars area ==== */
// {
//   expression,
//   result,
// }
let results = [];
/* end global vars area */

// clear the results
const clear_results = document.querySelector("button.clear");

clear_results.addEventListener("click", () => {
  const results_container = document.querySelector("div.results");

  results_container.innerHTML = "";
  results = [];
});

// add this on function responsible to append the results
// handle the result when clicked
// const results_equation = document.querySelector(".results > .equation");

// results_equation.addEventListener("click", () => {
//   // put me into input field
//   alert("put me into input field");
// });
