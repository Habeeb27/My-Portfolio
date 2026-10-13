// Find the theme button on the page.
const themeToggle = document.querySelector("#themeToggle");

// Restore the visitor's saved theme, if they chose one previously.
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️ Theme";
  themeToggle.setAttribute("aria-label", "Switch to light mode");
}

// Switch themes when the button is clicked and save the choice.
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️ Theme" : "🌙 Theme";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
});

// Fade in elements as they enter the screen.
const fadeElements = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeElements.forEach((element) => observer.observe(element));
} else {
  // Show the elements immediately in older browsers.
  fadeElements.forEach((element) => element.classList.add("visible"));
}

// Automatically display the current year in the footer.
document.querySelector("#year").textContent = new Date().getFullYear();
