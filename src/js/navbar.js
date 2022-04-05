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
}

const header = () => {
  const currentPath = window.location.pathname;

  if (currentPath === "/Impressum/index.html") {
    document.querySelector(".kaffee-bohne-mobile").style.fill = "black";
    document.querySelector("#path2").style.stroke = "black";

    for (
      var i = 0;
      i < document.querySelectorAll(".a-nav-desktop").length;
      i++
    ) {
      document.querySelectorAll(".a-nav-desktop")[i].style.color = "black";
    }
    document.querySelector(".Kaffee-Bohne-desktop").style.fill = "black";
  }
};

export { header };
export default navBar;
