export default class Task {
  constructor(title, priority, dueDate, details = "") {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.details = details;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  getStringDate() {
    const day = this.dueDate.split("/")[0];
    const month = this.dueDate.split("/")[1];
    const year = this.dueDate.split("/")[2];

    return `${day}/${month}/${year}`;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setDetails(details) {
    this.details = details;
  }

  getDetails() {
    return this.details;
  }
}
