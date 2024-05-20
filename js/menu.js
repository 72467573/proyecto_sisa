document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector(".hamburger");
    var navBar = document.querySelector(".nav-bar");
    var navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        navBar.classList.toggle("active");
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(nav) { nav.classList.remove('active'); });
            link.classList.add('active');
            navBar.classList.remove('active'); // Close the menu on link click
        });
    });
});