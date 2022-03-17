// import myFunction, { multiply } from "./myModule";

// myFunction();

// const result = multiply(2, 5);

// console.log(result);

const burgerMenu = document.querySelector(".burger-menu-mobile");
burgerMenu.addEventListener("click", openNavMenu);

const navMobile = document.querySelector(".nav-mobile")

function openNavMenu() {
    navMobile.classList.toggle("nav-mobile-active")
}