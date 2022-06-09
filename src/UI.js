import Project from "./Project";
import Task from "./Task";
import Storage from "./Storage";

export default class UI {
  static loadApp() {
    UI.loadProjects();
    UI.initAddProjectListener();
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => UI.createProject(project.name));
  }

  static loadTasks(projectName) {
    Storage.getTodoList()
      .getProject(projectName)
      .getTasks()
      .forEach((task) => UI.createTask(task));
  }

  static loadProjectContent(projectName) {
    const currentProject = document.querySelector(".current-project");
    currentProject.textContent = projectName;

    UI.loadTasks(projectName);
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

  static initAddProjectListener() {
    const addProjectForm = document.querySelector(".add-project-container");
    const addProjectButton = document.querySelector("#add-project");
    const addProjectInput = document.querySelector("#add-project-input");

    addProjectButton.addEventListener("click", () =>
      addProjectInput.classList.toggle("show")
    );

    addProjectForm.addEventListener("submit", (element) => {
      element.preventDefault();

      const projectName = addProjectInput.value;
      if (projectName === null || projectName === "") return;
      UI.addProject(projectName);
      addProjectInput.value = "";
      addProjectInput.classList.remove("show");
    });
  }

  static createProject(projectToBeCreated) {
    const projectsContainer = document.querySelector(".projects-container");
    const project = document.createElement("div");
    const removeProjectButton = document.createElement("button");
    const projectName = document.createElement("p");

    project.classList.add("project");

    projectName.classList.add("project-name");
    projectName.textContent = projectToBeCreated;

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

  static clearAll() {
    UI.clearCurrentProject();
    UI.clearProjects();
    UI.clearTasks();
  }

  static clearCurrentProject() {
    const currentProject = document.querySelector(".current-project");
    currentProject.textContent = "";
  }

  static clearProjects() {
    const projects = document.querySelector("#projects-container");
    projects.innerHTML = "";
  }

  static clearTasks() {
    const tasks = document.querySelector(".task-list");
    tasks.innerHTML = "";
  }

  static addProject(projectName) {
    if (Storage.getTodoList().contains(projectName)) {
      alert(
        "You can't have two projects with the same name. Please consider changing it."
      );
      return;
    }

    Storage.addProject(new Project(projectName));
    UI.createProject(projectName);
  }
}
