// script.js

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

// Header Shadow On Scroll

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.boxShadow =
    "0 2px 15px rgba(0,0,0,0.3)";

  }

  else{

    header.style.boxShadow = "none";

  }

});

// Contact Form Alert

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

  event.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();

});