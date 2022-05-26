import Task from "../logic/TaskController";

function createTodoItem(title, details) {
  const todoItem = document.createElement("div");
  const removeTodoButton = document.createElement("button");
  const todoTexts = document.createElement("div");
  const todoTitle = document.createElement("h3");
  const todoDetails = document.createElement("p");
  const dueDateDiv = document.createElement("div");
  const dueDateInput = document.createElement("input");
  const completionCheckDiv = document.createElement("div");
  const completionCheckbox = document.createElement("input");

  todoItem.classList.add("todoItem");

  removeTodoButton.type = "button";
  removeTodoButton.classList.add("removeTodo");
  removeTodoButton.textContent = "-";

  todoTexts.classList.add("todoTexts");
  todoTitle.textContent = title;
  todoDetails.textContent = details;
  todoTexts.appendChild(todoTitle);
  todoTexts.appendChild(todoDetails);

  dueDateDiv.classList.add("dueDate");
  dueDateInput.type = "date";
  dueDateInput.name = "duedate";
  dueDateInput.classList.add("timeInput");
  dueDateDiv.appendChild(dueDateInput);

  completionCheckDiv.classList.add("completionCheck");
  completionCheckbox.type = "checkbox";
  completionCheckbox.name = "completioncheck";
  completionCheckbox.classList.add("checkboxInput");
  completionCheckDiv.appendChild(completionCheckbox);

  todoItem.appendChild(removeTodoButton);
  todoItem.appendChild(todoTexts);
  todoItem.appendChild(dueDateDiv);
  todoItem.appendChild(completionCheckDiv);

  return todoItem;
}

function createTodoList() {
  //idea! take an array of objects and loop over them to create the todoItems!
  const todoList = document.createElement("div");

  todoList.classList.add("todoList");
  todoList.appendChild(createTodoItem("Title 1", "Henlo 1"));
  todoList.appendChild(
    createTodoItem(
      "Title 2",
      `Henlo 2 but with longer texts to measure the actions I need to
    take in order to fix the width and put a container so that it
    doesn't overflow from the design I made`
    )
  );
  todoList.appendChild(createTodoItem("Title 3", "Henlo 3"));

  return todoList;
}

export default function createTodoContainer() {
  const todoContainer = document.createElement("section");
  const title = document.createElement("h2");

  title.textContent = "To Do";
  todoContainer.classList.add("todoContainer");

  todoContainer.appendChild(title);
  todoContainer.appendChild(createTodoList());
  return todoContainer;
}
