let drive = document
  .querySelector("#resume-button-2")
  .addEventListener("click", openDrive);

let drive1 = document
  .querySelector("#resume-button-1")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "https://drive.google.com/file/d/17e1Xp0lcDd_iPcSahRMAbHVOLrE0xl7-/view?usp=sharing")
  );
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
