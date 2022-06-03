import Project from "./ProjectController";
import Task from "./TaskController";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Default"));
    this.projects.push(new Project("Testing"));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    this.projects = this.projects.filter(
      (project) => project.name !== projectName
    );
  }
}
