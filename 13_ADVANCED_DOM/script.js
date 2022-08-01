"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// BUTTON SROLLING

btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  const s1Coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// PAGE NAVIGATION

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    console.log("LINK");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
///////////////////////////////////////
console.log("----------------LECTURE -----------------------------");
// SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector("header");
// console.log(header);
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// document.getElementsByClassName("btn");

// // CREATING AND INSERTING ELEMENTS
// const message = document.createElement("div");
// message.classList.add(`cookie-message`);

// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';

// // Inserting inside header

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // Inserting as a sibling to header
// // header.before(message);
// // header.after(message);

// // DELETE ELEMENTS
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// // STYLES /////
// message.style.background = "#37383d";
// message.style.width = "120%";

// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// // document.documentElement.style.setProperty("--color-primary", "#ffcb03");

// // ATTRIBUTES
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Beautifull Minimalist Logo";
// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// console.log(logo.src);
// console.log(logo.getAttribute("src"));

// const link = document.querySelector(".twitter-link");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// // DATA ATTRIBUTES
// console.log(logo.dataset.versionNumber);

// // CLASSES
// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c");

// // logo.className = "jonas"; //don't use

// const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert("addEventListener: Great! you are reading the heading");
//   // h1.removeEventListener("mouseenter", alertH1);
// };

// h1.addEventListener("mouseenter", alertH1);
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// // Random Color
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`Link`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`CONTAINER `, e.target);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`NAV `, e.target);
// });
