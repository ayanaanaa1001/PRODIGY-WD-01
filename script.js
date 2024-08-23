// to hange the navbar background color on scroll
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#222";
    } else {
        navbar.style.backgroundColor = "#333";
    }
});

// to add hover effects to nav links
document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'white';
        this.style.color = '#333';
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
        this.style.color = 'white';
    });
});
