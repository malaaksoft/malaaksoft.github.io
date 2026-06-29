// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ===============================
// Close Menu After Clicking Link
// ===============================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});

// ===============================
// Header Background on Scroll
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.background = "rgba(9,7,15,.95)";
        header.style.backdropFilter = "blur(18px)";

    }else{

        header.style.background = "rgba(9,7,15,.75)";
        header.style.backdropFilter = "blur(16px)";

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".feature-card, .stat-card, .gallery-item, .tech-card, .contact-card, .about-container"
);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < trigger){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();