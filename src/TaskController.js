export default class Task {
  constructor(title, priority, dueDate = "", description = "") {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.isDone = false;
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

  getIsDone() {
    return this.isDone;
  }

  toggleIsDone() {
    if (this.isDone === false) {
      this.isDone = true;
    } else if (this.isDone === true) {
      this.isDone = false;
    }
  }
}
