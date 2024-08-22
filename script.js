document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Menghentikan observasi setelah animasi diterapkan
            }
        });
    }, { threshold: 0.1 }); // Menyesuaikan threshold sesuai kebutuhan

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const scrollThreshold = 50; // Adjust this value to determine when the background should appear

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

const menuIcon = document.getElementById('menuIcon');
    const navList = document.querySelector('.navlist');

    // Add event listener to the menu icon
    menuIcon.addEventListener('click', function() {
        // Toggle the 'active' class on the nav list
        navList.classList.toggle('active');
    });
