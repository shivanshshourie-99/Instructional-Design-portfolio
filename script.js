// === Back to Top Button ===
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Dark/Light Mode Toggle ===
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  modeToggle.textContent =
    document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

// === Expand/Collapse Project Cards ===
function toggleCard(card) {
  card.classList.toggle("active");
}
