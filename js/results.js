"use strict";
/* ==== global vars area ==== */
let results = []; // { expression,result }
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
// when clicked in operation result adds the result. when clicked on operation adds the operation
//   // put me into input field
//   alert("put me into input field");
// });
