function toggleMobileMenu() {
    const navMenu = document.getElementById('menu_bar');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('menu_bar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Close mobile menu when window is resized to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.getElementById('menu_bar').classList.remove('active');
    }
});