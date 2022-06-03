import Project from "./ProjectController";
import Task from "./TaskController";
import Storage from "./Storage";

export default class UI {
  static attachListeners() {
    const openModal = document.querySelector("#open-modal");
    const modal = document.querySelector("#modal-container");
    const closeModal = document.querySelector("#close-modal");
    const textArea = document.querySelector("#task-description");
    const addTaskButton = document.querySelector("#submit-modal");
    const removeTaskButtons = document.querySelectorAll(".remove-task");
    const addProjectButton = document.querySelector(".add-project");
    const addProjectInput = document.querySelector(".add-project-input");
    const addProjectForm = document.querySelector(".add-project-container");

    addProjectButton.addEventListener("click", () =>
      addProjectInput.classList.toggle("show")
    );

    addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectName = addProjectInput.value;
      if (projectName === null || projectName === "") {
        return;
      } else {
        UI.createProject(new Project(projectName));
        addProjectInput.value = "";
        addProjectInput.classList.remove("show");
      }
    });

    openModal.addEventListener("click", () => modal.classList.add("show"));
    closeModal.addEventListener("click", () => modal.classList.remove("show"));

    window.addEventListener("keydown", (e) => {
      if (modal.classList.contains("show") && e.key === "Escape") {
        modal.classList.remove("show");
      }
    });

    addTaskButton.addEventListener("click", () => {
      const values = UI.getModalValues();
      console.log(UI.getModalValues());
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
    const taskTexts = document.createElement("div");
    const taskTitle = document.createElement("h3");
    const taskDescription = document.createElement("p");
    const taskDueDateDiv = document.createElement("div");
    const taskDueDate = document.createElement("input");
    const completionCheck = document.createElement("div");
    const checkboxInput = document.createElement("input");

    taskItem.classList.add("task-item");

    removeTaskButton.type = "button";
    removeTaskButton.classList.add("remove-task");
    removeTaskButton.textContent = "-";

    taskTexts.classList.add("task-texts");
    switch (taskObject.priority) {
      case "low":
        taskTexts.classList.add("low");
        break;
      case "medium":
        taskTexts.classList.add("medium");
        break;
      case "high":
        taskTexts.classList.add("high");
        break;
    }

    taskTitle.textContent = taskObject.title;
    taskDescription.textContent = taskObject.description;

    taskTexts.appendChild(taskTitle);
    taskTexts.appendChild(taskDescription);

    taskDueDateDiv.classList.add("due-date");
    taskDueDate.type = "date";
    taskDueDate.classList.add("time-input");
    taskDueDate.value = taskObject.dueDate;
    taskDueDateDiv.appendChild(taskDueDate);

    completionCheck.classList.add("completion-check");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");

    checkboxInput.addEventListener("change", () => {
      if (checkboxInput.checked === true) {
        taskItem.classList.add("completed");
      } else if (checkboxInput.checked === false) {
        taskItem.classList.remove("completed");
      }
    });
    completionCheck.appendChild(checkboxInput);

    removeTaskButton.addEventListener("click", UI.removeTask);
    taskItem.appendChild(removeTaskButton);
    taskItem.appendChild(taskTexts);
    taskItem.appendChild(taskDueDateDiv);
    taskItem.appendChild(completionCheck);

    taskList.appendChild(taskItem);
  }

  static removeTask() {
    this.parentNode.remove();
  }

  static createProject(projectObject) {
    const projectsContainer = document.querySelector(".projects-container");
    const project = document.createElement("div");
    const removeProjectButton = document.createElement("button");
    const projectName = document.createElement("p");

    project.classList.add("project");
    project.dataset.projectId = projectObject.id;

    projectName.classList.add("project-name");
    projectName.textContent = projectObject.name;

    removeProjectButton.type = "button";
    removeProjectButton.classList.add("remove-project");
    removeProjectButton.textContent = "-";
    removeProjectButton.addEventListener("click", UI.removeProject);

    project.appendChild(projectName);
    project.appendChild(removeProjectButton);

    projectsContainer.appendChild(project);
  }

  static clearProjectElements(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  static removeProject() {
    this.parentNode.remove();
  }
}
