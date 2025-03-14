const toggleBtn = document.getElementById("toggleBtn");
const paragraph = document.getElementById("paragraph");

toggleBtn.addEventListener("click", () => {
  paragraph.classList.toggle("hidden");
});
