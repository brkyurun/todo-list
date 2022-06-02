import Task from "./TaskController";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(taskObject) {
    const task = new Task(
      taskObject.title,
      taskObject.priority,
      taskObject.dueDate,
      taskObject.description
    );
    this.tasks.push(task);
  }

  removeTask(taskTitle) {
    const index = this.getTasks().findIndex((task) => task.title === taskTitle);
    this.getTasks().splice(index, 1);
  }
}
