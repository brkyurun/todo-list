export default class UI {
  static attachListeners() {
    const openModal = document.querySelector("#open-modal");
    const modal = document.querySelector("#modal-container");
    const closeModal = document.querySelector("#close-modal");
    const textArea = document.querySelector("#task-description");
    const addTaskButton = document.querySelector("#submit-modal");
    const removeTaskButtons = document.querySelectorAll(".remove-task");

    openModal.addEventListener("click", () => modal.classList.add("show"));
    closeModal.addEventListener("click", () => modal.classList.remove("show"));

    window.addEventListener("keydown", (e) => {
      if (modal.classList.contains("show") && e.key === "Escape") {
        modal.classList.remove("show");
      }
    });

    addTaskButton.addEventListener("click", () => {
      const values = UI.getModalValues();
      UI.createTask(values);
      UI.clearFormFields();
      modal.classList.remove("show");
    });

    removeTaskButtons.forEach((button) =>
      button.addEventListener("click", UI.removeTask)
    );

    function resizeArea() {
      this.style.height = this.scrollHeight + "px";
    }

    textArea.addEventListener("input", resizeArea);
  }

  static getModalValues() {
    const title = document.querySelector("#task-title").value;
    const priority = document.querySelector("#task-priority").value;
    const dueDate = document.querySelector("#task-date").value;
    const description = document.querySelector("#task-description").value;

    console.log(title, priority, dueDate, description);

    return { title, priority, dueDate, description };
  }

  static clearFormFields() {
    const title = document.querySelector("#task-title");
    const priority = document.querySelector("#task-priority");
    const dueDate = document.querySelector("#task-date");
    const description = document.querySelector("#task-description");

    title.value = "";
    priority.value = "low";
    dueDate.value = "";
    description.value = "";
  }

  static createTask(taskObject) {
    const taskList = document.querySelector(".task-list");
    const taskItem = document.createElement("div");
    const removeTaskButton = document.createElement("button");

    taskItem.classList.add("task-item");

    removeTaskButton.type = "button";
    removeTaskButton.classList.add("remove-task");
    removeTaskButton.textContent = "-";

    taskItem.innerHTML = `
      <div class="task-texts">
        <h3>${taskObject.title}</h3>
        <p>${taskObject.description}</p>
      </div>
      <div class="due-date">
        <input type="date" class="time-input">
      </div>
      <div class="completion-check">
        <input type="checkbox" class="checkbox-input">
      </div>
    `;

    removeTaskButton.addEventListener("click", UI.removeTask);
    taskItem.insertBefore(removeTaskButton, taskItem.firstChild);

    taskList.appendChild(taskItem);
  }

  static removeTask() {
    this.parentNode.remove();
  }

  static createProject(name) {
    const projectsContainer = document.querySelector(".projects-container");
    const project = document.createElement("div");
    const removeProjectButton = document.createElement("button");
    const projectName = document.createElement("p");

    project.classList.add("project");

    projectName.classList.add("project-name");
    projectName.textContent = name;

    removeProjectButton.type = "button";
    removeProjectButton.classList.add("remove-project");
    removeProjectButton.textContent = "-";
    removeProjectButton.addEventListener("click", UI.removeProject);

    project.appendChild(projectName);
    project.appendChild(removeProjectButton);

    projectsContainer.appendChild(project);
  }

  static removeProject() {
    this.parentNode.remove();
  }
}
