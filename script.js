document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon
            if (navLinks.classList.contains('active')) {
                mobileMenuBtn.innerHTML = '&times;'; // Close symbol
            } else {
                mobileMenuBtn.innerHTML = '&#9776;'; // Hamburger symbol
            }
        });
    }
});
