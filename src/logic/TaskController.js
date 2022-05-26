export default class Task {
  constructor(title, priority, dueDate, details = "") {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.details = details;
  }

  static setName(name) {
    this.name = name;
  }

  static getName() {
    return this.name;
  }

  static setDate(dueDate) {
    this.dueDate = dueDate;
  }

  static getDate() {
    return this.dueDate;
  }

  static getStringDate() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];

    return `${day}/${month}/${year}`;
  }

  static setPriority(priority) {
    this.priority = priority;
  }

  static getPriority() {
    return this.priority;
  }

  static setDetails(details) {
    this.details = details;
  }

  static getDetails() {
    return this.details;
  }
}
