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

  addTask(task) {
    this.tasks.push({
      title: task.title,
      priority: task.priority,
      dueDate: task.dueDate,
      details: task.details,
    });
  }

  removeTask(taskTitle) {
    const index = this.getTasks().findIndex((task) => task.title === taskTitle);
    this.getTasks().splice(index, 1);
  }
}
