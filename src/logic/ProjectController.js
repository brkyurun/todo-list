export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  static setName(name) {
    this.name = name;
  }

  static getName() {
    return this.name;
  }

  static addTask(task) {
    this.tasks.push({
      title: task.title,
      priority: task.priority,
      dueDate: task.dueDate,
      details: task.details,
    });
  }

  static getTasks() {
    return this.tasks;
  }
}
