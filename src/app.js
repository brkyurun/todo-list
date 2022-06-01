import Project from "./ProjectController";
import Task from "./TaskController";
import UI from "./UI";

UI.attachListeners();

const testProject = new Project("Test");
const testTask = new Task("Henlo 4", "low", "23/07/2022", "very secret stuff");
const testTaskSecond = new Task(
  "Henlo 5",
  "low",
  "23/07/2023",
  "very secret stuff"
);
const testTaskThird = new Task(
  "Henlo 6",
  "low",
  "23/07/2024",
  "very secret stuff"
);

testProject.addTask(testTask);
testProject.addTask(testTaskSecond);
testProject.addTask(testTaskThird);
console.log(testProject.getName());
console.log(testProject.getTasks());
UI.createTask(testTask);
UI.createTask(testTaskSecond);
UI.createTask(testTaskThird);
UI.createProject(testProject.getName());

// todos:
// - create new ui components to create projects and tasks
// - create controller modules for projects and tasks to handle logic and data
// - projects should have empty arrays when created, and render from that array of objects to create UI elements
