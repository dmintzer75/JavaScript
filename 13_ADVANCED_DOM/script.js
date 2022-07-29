"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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
///////////////////////////////////////

// SELECTING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector("header");
console.log(header);
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

document.getElementsByClassName("btn");

// CREATING AND INSERTING ELEMENTS
const message = document.createElement("div");
message.classList.add(`cookie-message`);

message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie"> Got it!</button>';

// Inserting inside header

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// Inserting as a sibling to header
// header.before(message);
// header.after(message);

// DELETE ELEMENTS
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

// STYLES /////
message.style.background = "#37383d";
message.style.width = "120%";

console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "#ffcb03");

// ATTRIBUTES
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautifull Minimalist Logo";
// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

// DATA ATTRIBUTES
console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// logo.className = "jonas"; //don't use
