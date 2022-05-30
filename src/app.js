const openModal = document.querySelector("#open-modal");
const modal = document.querySelector("#modal-container");
const closeModal = document.querySelector("#close-modal");
const textArea = document.querySelector("#task-description");

openModal.addEventListener("click", () => modal.classList.add("show"));
closeModal.addEventListener("click", () => modal.classList.remove("show"));

window.addEventListener("keydown", (e) => {
  if (modal.classList.contains("show") && e.key === "Escape") {
    modal.classList.remove("show");
  }
});

textArea.addEventListener("input", resizeArea);

function resizeArea() {
  this.style.height = this.scrollHeight + "px";
}

// todos:
// - create new ui components to create projects and tasks
// - create controller modules for projects and tasks to handle logic and data
// - projects should have empty arrays when created, and render from that array of objects to create UI elements
