// JavaScript for text animation
const animatedText = document.getElementById("animated-text");
const originalText = "Vatsal Maniar";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?".split(
    ""
  );
const duration = 50; // Duration of each random character change in milliseconds
const animationTime = 1000; // Total time for the animation before showing the name

function animateText() {
  const startTime = Date.now();
  
  const interval = setInterval(() => {
    const currentTime = Date.now();
    
    if (currentTime - startTime >= animationTime) {
      clearInterval(interval);
      animatedText.textContent = originalText;
    } else {
      animatedText.textContent = originalText
        .split("")
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join("");
    }
  }, duration);
}

// Call the function to start animation when DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  animateText();
});

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

//Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-section form");

  form.addEventListener("submit", (event) => {
    // Add custom validation logic if needed
    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Please fill out all fields.");
    }
  });
});

// Debounce function to limit the rate of function execution
function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function () {
    const context = this, args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Handle scroll to resize name
const nameElement = document.querySelector(".exo-2-name");
const initialFontSize = 6; // Initial font size in rem
const minFontSize = 2; // Minimum font size in rem
const maxScroll = 300; // Max scroll amount at which the font size will reach the minimum value

window.addEventListener('scroll', debounce(() => {
  const scrollY = window.scrollY;
  const newFontSize = Math.max(minFontSize, initialFontSize - (scrollY / maxScroll) * (initialFontSize - minFontSize));
  nameElement.style.fontSize = `${newFontSize}rem`;
}, 10));

// Custom cursor functionality
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  // Move the main cursor
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Change cursor color based on the theme
const changeCursorColor = () => {
  if (body.classList.contains('light-mode')) {
    cursor.style.backgroundColor = '#3f24d6';
  } else {
    cursor.style.backgroundColor = '#fda521';
  }
};

// Update cursor color on theme toggle
themeToggle.addEventListener('click', changeCursorColor);

// Initial cursor color setting
changeCursorColor();