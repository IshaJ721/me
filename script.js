document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const buttons = document.querySelectorAll(".tab-button");
  const pages = document.querySelectorAll(".tab-page");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
});
