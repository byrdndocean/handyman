// Hamburger Menu
let nav = document.querySelector(".header__nav--links");
let burger = document.querySelector(".header__nav--hamburger");
let burgerFirstLine = document.querySelector(".line-1");
let burgerSecondLine = document.querySelector(".line-2");

burger.addEventListener("click", function () {
  burgerFirstLine.classList.toggle("line-1-toggled");
  burgerSecondLine.classList.toggle("line-2-toggled");

  nav.classList.toggle("display-nav");
});

// loading - animate on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));