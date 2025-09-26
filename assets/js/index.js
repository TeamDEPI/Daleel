// Tab functionality
const tabButtons = document.querySelectorAll(".tab-btn");
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    this.classList.add("active");
  });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll(".nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
  ".tour-card, .category-card, .offer-card, .testimonial-card, .blog-card"
);
animateElements.forEach((el) => {
  observer.observe(el);
});

// Search form submission
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Search functionality will be implemented soon!");
  });
}

// Book now buttons
const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Booking system will be implemented soon!");
  });
});

// CTA button
const ctaBtn = document.querySelector(".cta-btn");
if (ctaBtn) {
  ctaBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Trip planning feature coming soon!");
  });
}

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.backgroundColor = "#fff";
    header.style.backdropFilter = "none";
  }
});

// Counter animation for stats
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number, .stat-main-number");
  counters.forEach((counter) => {
    const target = parseInt(counter.textContent.replace(/[^0-9]/g, ""));
    const suffix = counter.textContent.replace(/[0-9]/g, "");
    let current = 0;
    const increment = target / 50;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
    }, 50);
  });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector(".section-bg-blue");
if (statsSection) {
  const statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  });

  statsObserver.observe(statsSection);
}

// Play button functionality
const playButton = document.querySelector(".play-button");
if (playButton) {
  playButton.addEventListener("click", function () {
    alert("Video player will be implemented soon!");
  });
}

// Gallery item click
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach((item) => {
  item.addEventListener("click", function () {
    alert("Image viewer will be implemented soon!");
  });
});

// Login and signup buttons
const loginBtn = document.querySelector(".btn-login");
const signupBtn = document.querySelector(".btn-signup");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    alert("Login functionality will be implemented soon!");
  });
}

if (signupBtn) {
  signupBtn.addEventListener("click", function () {
    alert("Sign up functionality will be implemented soon!");
  });
}
