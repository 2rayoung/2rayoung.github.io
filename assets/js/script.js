
'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// portfolio section variables
const pages = document.querySelectorAll("[data-page]");
const navigationLinks = document.querySelectorAll("[data-nav-link]");

// Show portfolio section by default
document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page === "portfolio") {
      pages[i].classList.add("active");
      navigationLinks[i]?.classList.add("active");
    } else {
      pages[i].classList.remove("active");
      navigationLinks[i]?.classList.remove("active");
    }
  }
});
