// import myFunction, { multiply } from "./myModule";

// myFunction();

// const result = multiply(2, 5);

// console.log(result);

import navBar, { header } from "./navbar";

document.addEventListener("DOMContentLoaded", function (event) {
  navBar();
  header();
});
