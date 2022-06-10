import Project from "./Project";
import Task from "./Task";
import Storage from "./Storage";

export default class UI {
  static loadApp() {
    const projectsContainer = document.querySelector("#projects-container");
    const defaultTasks = [
      {
        title: "This is a low priority task!",
        priority: "low",
        description:
          "Low priority tasks only have a single exclamation mark next to their title.",
      },
      {
        title: "This is a medium priority task!",
        priority: "medium",
        description:
          "Medium priority tasks have two exclamation marks instead of one.",
      },
      {
        title: "This is a high priority task!",
        priority: "high",
        description:
          "If you want to feel overwhelming and crippling anxiety, you can use 'very important' to feel the pressure! ",
      },
    ];

    if (localStorage.getItem("todoList") === null) {
      defaultTasks.forEach((task) => Storage.addTask("Hello World", task));
    }

    UI.loadProjects();
    UI.initAddProjectListener();
    UI.initAddTaskListener();
    UI.openProject("Hello World", projectsContainer.firstChild);
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
      .forEach((task) =>
        UI.createTask(task.title, task.priority, task.dueDate, task.description)
      );
  }

  static loadProjectContent(projectName) {
    const currentProject = document.querySelector(".current-project");
    currentProject.textContent = projectName;

    UI.clearTasks();
    UI.loadTasks(projectName);
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

  static initAddTaskListener() {
    const openTaskForm = document.querySelector("#open-modal");
    const taskFormModal = document.querySelector("#modal-container");
    const closeTaskForm = document.querySelector("#close-modal");
    const submitTaskForm = document.querySelector("#submit-modal");
    const textArea = document.querySelector("#task-description");

    openTaskForm.addEventListener("click", () =>
      taskFormModal.classList.add("show")
    );
    closeTaskForm.addEventListener("click", () =>
      taskFormModal.classList.remove("show")
    );

    submitTaskForm.addEventListener("click", (e) => {
      e.preventDefault();
      const taskObject = UI.getModalValues();
      taskFormModal.classList.remove("show");
      UI.addTask();
      UI.clearModalInputs();
      textArea.style.height = "35px";
    });

    window.addEventListener("keydown", (e) => {
      if (taskFormModal.classList.contains("show") && e.key === "Escape") {
        taskFormModal.classList.remove("show");
      }
    });

    function resizeArea() {
      if (this.style.height > "70px") return;
      this.style.height = this.scrollHeight + "px";
    }

    textArea.addEventListener("input", resizeArea);
  }

  static getModalValues() {
    const title = document.querySelector("#task-title").value;
    const priority = document.querySelector("#task-priority").value;
    const dueDate = document.querySelector("#task-date").value;
    const description = document.querySelector("#task-description").value;

    return { title, priority, dueDate, description };
  }

  static createProject(projectToBeCreated) {
    const projectsContainer = document.querySelector(".projects-container");
    const project = document.createElement("div");
    const removeProjectButton = document.createElement("button");
    const projectName = document.createElement("p");

    project.classList.add("project");

    projectName.classList.add("project-name");
    projectName.textContent = projectToBeCreated;
    projectName.addEventListener("click", (e) => {
      const projectNameToBeUsed = e.target.textContent;
      const projectParent = e.target.parentElement;
      UI.openProject(projectNameToBeUsed, projectParent);
    });

    removeProjectButton.type = "button";
    removeProjectButton.classList.add("remove-project");
    removeProjectButton.textContent = "-";
    removeProjectButton.addEventListener("click", (e) => {
      const projectName = e.target.previousElementSibling.textContent;
      const parentProject = e.target.parentElement;
      UI.deleteProject(projectName, parentProject);
    });

    project.appendChild(projectName);
    project.appendChild(removeProjectButton);

    projectsContainer.appendChild(project);
  }

  static deleteProject(projectName, parentProject) {
    if (parentProject.classList.contains("selected")) {
      UI.clearCurrentProject();
    }
    Storage.deleteProject(projectName);
    UI.clearProjects();
    UI.loadProjects();
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

  static clearModalInputs() {
    const title = document.querySelector("#task-title");
    const priority = document.querySelector("#task-priority");
    const dueDate = document.querySelector("#task-date");
    const description = document.querySelector("#task-description");
    const inputs = [title, priority, dueDate, description];
    inputs.forEach((input) => (input.value = ""));
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

  static openProject(projectName, projectParent) {
    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => project.classList.remove("selected"));
    projectParent.classList.add("selected");
    UI.loadProjectContent(projectName);
  }

  static createTask(title, priority, dueDate = "", description = "") {
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
    switch (priority) {
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

    taskTitle.textContent = title;
    taskDescription.textContent = description;

    taskTexts.appendChild(taskTitle);
    taskTexts.appendChild(taskDescription);

    taskDueDateDiv.classList.add("due-date");
    taskDueDate.type = "date";
    taskDueDate.classList.add("time-input");
    taskDueDate.value = dueDate;
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

    removeTaskButton.addEventListener("click", (e) => {
      const taskName = e.target.nextElementSibling.children[0].textContent;
      UI.deleteTask(taskName);
    });
    taskItem.appendChild(removeTaskButton);
    taskItem.appendChild(taskTexts);
    taskItem.appendChild(taskDueDateDiv);
    taskItem.appendChild(completionCheck);

    taskList.appendChild(taskItem);
  }

  static deleteTask(taskName) {
    const projectName = document.querySelector(".current-project").textContent;

    Storage.deleteTask(projectName, taskName);
    UI.clearTasks();
    UI.loadTasks(projectName);
  }

  static addTask() {
    const projectName = document.querySelector(".current-project").textContent;
    const taskTitleFromInput = document.querySelector("#task-title");
    const { title, priority, dueDate, description } = UI.getModalValues();

    if (taskTitleFromInput.value === "") {
      alert("Please fill the task title.");
      return;
    }
    if (Storage.getTodoList().getProject(projectName).contains(title)) {
      alert("This task already exists. Please consider changing it.");
      taskTitleFromInput.value = "";
      return;
    }

    Storage.addTask(
      projectName,
      new Task(title, priority, dueDate, description)
    );
    UI.createTask(title, priority, dueDate, description);
  }
}
