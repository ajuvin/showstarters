document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(resp => resp.text())
      .then(data => el.innerHTML = data)
      .catch(err => console.error("Include error:", err));
  });
});
