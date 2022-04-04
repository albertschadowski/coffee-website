function navBar() {
    const burgerMenu = document.querySelector(".burger-menu-mobile");
    const navMobile = document.querySelector(".nav-mobile");
    const closeMenu = document.querySelector(".nav-close");
    const body = document.querySelector("body");

    burgerMenu.addEventListener("click", openNavMenu);
    closeMenu.addEventListener("click", closeNavMenu);

    function openNavMenu() {
        navMobile.classList.add("nav-mobile-active");
        body.style.overflow = "hidden";
    }

    function closeNavMenu() {
        navMobile.classList.remove("nav-mobile-active");
        body.style.removeProperty("overflow");
    }
};

export default navBar;
