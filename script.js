document.addEventListener("DOMContentLoaded", () => {
  // Function to hide the loading screen and show the main content
  function hideLoadingScreen() {
      const loadingScreen = document.getElementById("loading-screen");
      const mainContent = document.getElementById("main-content");

      loadingScreen.style.display = "none"; // Hide loading screen
      mainContent.style.display = "block"; // Show main content
  }

  // Simulate a delay for loading screen
  setTimeout(hideLoadingScreen, 3000); // Adjust the time (in milliseconds) as needed

  // Intersection Observer for fade-in effect
  const fadeElements = document.querySelectorAll(".fade-in");
  const observerOptions = { threshold: 0.1 }; // Adjust threshold as needed

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target); // Stop observing after animation is applied
          }
      });
  }, observerOptions);

  fadeElements.forEach((element) => {
      observer.observe(element);
  });

  // Header background change on scroll
  const header = document.querySelector("header");
  const scrollThreshold = 50; // Adjust this value to determine when the background should appear

  window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > scrollThreshold);
  });

  // Toggle Navbar and Icon Animation on Menu Icon Click
  const menuIcon = document.getElementById("menuIcon");
  const navList = document.querySelector(".navlist");

  menuIcon.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuIcon.classList.toggle("open"); // Toggle class for animation
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
          navList.classList.remove("active");
          menuIcon.classList.remove("open");
      }
  });

  // Portfolio Slider Logic
  let currentIndex = 0;

  function showSlide(index) {
      const slider = document.querySelector('.portfolio-slider');
      const totalItems = document.querySelectorAll('.portfolio-item').length;

      // Adjust index if it goes out of bounds
      if (index >= totalItems) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = totalItems - 1;
      } else {
          currentIndex = index;
      }

      // Move the slider based on the current index
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function prevSlide() {
      showSlide(currentIndex - 1);
  }

  function nextSlide() {
      showSlide(currentIndex + 1);
  }

  // Event Listeners for slider controls
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

  // Swipe gesture support for mobile
  let startX = 0;
  let endX = 0;

  const slider = document.querySelector('.portfolio-slider');

  slider.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
  });

  slider.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
  });

  slider.addEventListener('touchend', () => {
      if (startX > endX) {
          nextSlide(); // Swipe left
      } else if (startX < endX) {
          prevSlide(); // Swipe right
      }
  });
});
