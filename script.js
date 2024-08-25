document.addEventListener("DOMContentLoaded", () => {
    // Function to hide the loading screen and show the main content
    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        loadingScreen.style.display = 'none'; // Hide loading screen
        mainContent.style.display = 'block'; // Show main content
    }

    // Simulate a delay for loading screen
    setTimeout(hideLoadingScreen, 3000); // Adjust the time (in milliseconds) as needed

    // Intersection Observer for fade-in effect
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation is applied
            }
        });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    elements.forEach(element => {
        observer.observe(element);
    });

    // Header background change on scroll
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Adjust this value to determine when the background should appear

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Toggle Navbar and Icon Animation on Menu Icon Click
    const menuIcon = document.getElementById('menuIcon');
    const navList = document.querySelector('.navlist');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuIcon.classList.toggle('open'); // Toggle class for animation
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
            navList.classList.remove('active');
            menuIcon.classList.remove('open');
        }
    });
});
