
// Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// Scroll Animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});

// Footer Current Year

const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Tania. All rights reserved.`;
