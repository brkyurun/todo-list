export default class Task {
  constructor(title, priority, dueDate = "", description = "") {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
  }

  getTitle() {
    return this.title;
  }

  setTitle(taskTitle) {
    this.title = taskTitle;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(taskPriority) {
    this.priority = taskPriority;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(taskDueDate) {
    this.dueDate = taskDueDate;
  }

  getDetails() {
    return this.details;
  }

  setDetails(taskDetails) {
    this.details = taskDetails;
  }
}
