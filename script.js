// ==============================
// MOBILE MENU
// ==============================

function toggleMenu() {

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");

}


// ==============================
// CLOSE MOBILE MENU AFTER CLICK
// ==============================

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navbar").classList.remove("active");

    });

});


// ==============================
// CURRENT YEAR
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// SIMPLE SCROLL EFFECT
// ==============================

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 8px 30px rgba(0,0,0,0.12)";

    } else {

        header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.08)";

    }

});
