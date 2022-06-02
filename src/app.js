import Project from "./ProjectController";
import Task from "./TaskController";
import UI from "./UI";

UI.attachListeners();

const testProject = new Project("Test");
const testTaskFirst = new Task("Title 1", "low", "2022-08-15", "Henlo 1");
const testTaskSecond = new Task(
  "Title 2",
  "medium",
  "2021-09-28",
  "Henlo 2 but with longer texts to measure the actions I need to take in order to fix the width and put a container so that it doesn't overflow from the design I made"
);
const testTaskThird = new Task("Title 3", "high", "2024-07-23", "Henlo 3");

testProject.addTask(testTaskFirst);
testProject.addTask(testTaskSecond);
testProject.addTask(testTaskThird);
console.log(testProject.getName());
console.log(testProject.getTasks());
UI.createTask(testTaskFirst);
UI.createTask(testTaskSecond);
UI.createTask(testTaskThird);
UI.createProject(testProject.getName());
console.log(testProject.getTasks());

// todos:
// - create new ui components to create projects and tasks
// - create controller modules for projects and tasks to handle logic and data
// - projects should have empty arrays when created, and render from that array of objects to create UI elements
