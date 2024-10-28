// JavaScript for text animation
const animatedText = document.getElementById("animated-text");
const originalText = "Vatsal Maniar";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|;:,.<>?".split("");
const duration = 50;
const animationTime = 1000;

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

document.addEventListener("DOMContentLoaded", () => {
  animateText();
});

// Function to open the resume
function openResume() {
  window.open("RESUME.pdf", "_blank");
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Intersection Observer for animating sections
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

// Function to flip cards
function flipCard(card) {
  card.classList.toggle("flipped");
}

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  function revealTimelineItems() {
    const triggerBottom = window.innerHeight * 0.85;
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealTimelineItems);
  revealTimelineItems();
});

// Toggle theme functionality
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  themeIcon.classList.toggle("bi-moon");
  themeIcon.classList.toggle("bi-sun");
  animateText();
});

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-section form");

  form.addEventListener("submit", (event) => {
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
    const context = this,
      args = arguments;
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

// Handle scroll to resize name and tagline
const nameElement = document.querySelector(".exo-2-name");
const initialFontSize = 6;
const minFontSize = 2;
const maxScroll = 300;

window.addEventListener(
  "scroll",
  debounce(() => {
    const scrollY = window.scrollY;
    const newFontSize = Math.max(minFontSize, initialFontSize - (scrollY / maxScroll) * (initialFontSize - minFontSize));
    nameElement.style.fontSize = `${newFontSize}rem`;
  }, 10)
);

const nameElement2 = document.querySelector("#hero-tagline");
const initialFontSize2 = 1.5;
const minFontSize2 = 0.5;
const maxScroll2 = 300;

window.addEventListener(
  "scroll",
  debounce(() => {
    const scrollY2 = window.scrollY;
    const newFontSize2 = Math.max(minFontSize2, initialFontSize2 - (scrollY2 / maxScroll2) * (initialFontSize2 - minFontSize2));
    nameElement2.style.fontSize = `${newFontSize2}rem`;
  }, 10)
);

// Intersection Observer for about cards
const aboutObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
};

const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate__animated", "animate__fadeInUp");
      aboutObserver.unobserve(entry.target);
    }
  });
}, aboutObserverOptions);

document.querySelectorAll(".about-card").forEach(card => {
  aboutObserver.observe(card);
});

// Additional animations for about cards
document.querySelectorAll(".about-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.3}s`;
});

// Expanding effect for about cards
document.addEventListener("DOMContentLoaded", () => {
  const aboutCards = document.querySelectorAll(".about-card");

  aboutCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      aboutCards.forEach(c => {
        if (c !== card) {
          c.classList.remove("expanded");
          c.classList.add("collapsed");
        }
      });
      card.classList.add("expanded");
      card.classList.remove("collapsed");
    });

    card.addEventListener("mouseleave", () => {
      aboutCards.forEach(c => {
        c.classList.remove("expanded");
        c.classList.remove("collapsed");
      });
    });
  });
});

// Flipping project cards
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
});