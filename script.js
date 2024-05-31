// JavaScript for text animation
const animatedText = document.getElementById("animated-text");
const originalText = "Vatsal Maniar";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?".split(
    ""
  );
const duration = 75; // Duration of each character animation in milliseconds

function animateText(index = 0, currentText = "") {
  if (index < originalText.length) {
    setTimeout(() => {
      const randomChar =
        characters[Math.floor(Math.random() * characters.length)];
      animatedText.textContent = currentText + randomChar;
      animateText(index + 1, currentText);
    }, duration);
  } else {
    // Display the original text once animation completes
    setTimeout(() => {
      animatedText.textContent = originalText;
    }, duration);
  }
}
// Call the function to start animation
animateText();

// Function to open the resume
function openResume() {
  window.open("RESUME.pdf", "_blank");
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId !== "#") {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Intersection Observer for animating sections
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

function flipCard(card) {
  card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  function revealTimelineItems() {
    const triggerBottom = window.innerHeight * 0.85;
    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealTimelineItems);
  revealTimelineItems(); // Initial check
});

// Toggle theme functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    themeIcon.classList.remove("bi-moon");
    themeIcon.classList.add("bi-sun");
  } else {
    themeIcon.classList.remove("bi-sun");
    themeIcon.classList.add("bi-moon");
  }
});