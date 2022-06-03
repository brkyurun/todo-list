import Storage from "./Storage";
import Project from "./ProjectController";
import Task from "./TaskController";

export default class UI {
  static loadApp() {
    UI.loadProjects();
  }

  static loadProjects() {
    Storage.getTodoList()
      .getProjects()
      .forEach((project) => UI.createProject(project));

    UI.initAddProjectButton();
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

  static removeProject() {
    this.parentNode.remove();
  }

  static initAddProjectButton() {
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
  }
}
