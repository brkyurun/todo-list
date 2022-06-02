/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ProjectController.js":
/*!**********************************!*\
  !*** ./src/ProjectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _TaskController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskController */ "./src/TaskController.js");


class Project {
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
    const task = new _TaskController__WEBPACK_IMPORTED_MODULE_0__["default"](
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


/***/ }),

/***/ "./src/TaskController.js":
/*!*******************************!*\
  !*** ./src/TaskController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
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


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _TaskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskController */ "./src/TaskController.js");



class UI {
  static attachListeners() {
    const openModal = document.querySelector("#open-modal");
    const modal = document.querySelector("#modal-container");
    const closeModal = document.querySelector("#close-modal");
    const textArea = document.querySelector("#task-description");
    const addTaskButton = document.querySelector("#submit-modal");
    const removeTaskButtons = document.querySelectorAll(".remove-task");

    openModal.addEventListener("click", () => modal.classList.add("show"));
    closeModal.addEventListener("click", () => modal.classList.remove("show"));

    window.addEventListener("keydown", (e) => {
      if (modal.classList.contains("show") && e.key === "Escape") {
        modal.classList.remove("show");
      }
    });

    addTaskButton.addEventListener("click", () => {
      const values = UI.getModalValues();
      console.log(UI.getModalValues());
      UI.createTask(values);
      UI.clearFormFields();
      modal.classList.remove("show");
    });

    removeTaskButtons.forEach((button) =>
      button.addEventListener("click", UI.removeTask)
    );

    function resizeArea() {
      this.style.height = this.scrollHeight + "px";
    }

    textArea.addEventListener("input", resizeArea);
  }

  static getModalValues() {
    const title = document.querySelector("#task-title").value;
    const priority = document.querySelector("#task-priority").value;
    const dueDate = document.querySelector("#task-date").value;
    const description = document.querySelector("#task-description").value;

    console.log(title, priority, dueDate, description);

    return { title, priority, dueDate, description };
  }

  static clearFormFields() {
    const title = document.querySelector("#task-title");
    const priority = document.querySelector("#task-priority");
    const dueDate = document.querySelector("#task-date");
    const description = document.querySelector("#task-description");

    title.value = "";
    priority.value = "low";
    dueDate.value = "";
    description.value = "";
  }

  static createTask(taskObject) {
    const taskList = document.querySelector(".task-list");
    const taskItem = document.createElement("div");
    const removeTaskButton = document.createElement("button");
    const taskTexts = document.createElement("div");
    const taskTitle = document.createElement("h3");
    const taskDescription = document.createElement("p");
    const taskDueDateDiv = document.createElement("div");
    const taskDueDate = document.createElement("input");
    const completionCheck = document.createElement("div");
    const checkboxInput = document.createElement("input");

    taskItem.classList.add("task-item");

    removeTaskButton.type = "button";
    removeTaskButton.classList.add("remove-task");
    removeTaskButton.textContent = "-";

    taskTexts.classList.add("task-texts");
    switch (taskObject.priority) {
      case "low":
        taskTexts.classList.add("low");
        break;
      case "medium":
        taskTexts.classList.add("medium");
        break;
      case "high":
        taskTexts.classList.add("high");
        break;
    }

    taskTitle.textContent = taskObject.title;
    taskDescription.textContent = taskObject.description;

    taskTexts.appendChild(taskTitle);
    taskTexts.appendChild(taskDescription);

    taskDueDateDiv.classList.add("due-date");
    taskDueDate.type = "date";
    taskDueDate.classList.add("time-input");
    taskDueDate.value = taskObject.dueDate;
    taskDueDateDiv.appendChild(taskDueDate);

    completionCheck.classList.add("completion-check");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");

    checkboxInput.addEventListener("change", () => {
      if (checkboxInput.checked === true) {
        taskItem.classList.add("completed");
      } else if (checkboxInput.checked === false) {
        taskItem.classList.remove("completed");
      }
    });
    completionCheck.appendChild(checkboxInput);

    removeTaskButton.addEventListener("click", UI.removeTask);
    taskItem.appendChild(removeTaskButton);
    taskItem.appendChild(taskTexts);
    taskItem.appendChild(taskDueDateDiv);
    taskItem.appendChild(completionCheck);

    taskList.appendChild(taskItem);
  }

  static removeTask() {
    this.parentNode.remove();
  }

  static createProject(name) {
    const projectsContainer = document.querySelector(".projects-container");
    const project = document.createElement("div");
    const removeProjectButton = document.createElement("button");
    const projectName = document.createElement("p");

    project.classList.add("project");

    projectName.classList.add("project-name");
    projectName.textContent = name;

    removeProjectButton.type = "button";
    removeProjectButton.classList.add("remove-project");
    removeProjectButton.textContent = "-";
    removeProjectButton.addEventListener("click", UI.removeProject);

    project.appendChild(projectName);
    project.appendChild(removeProjectButton);

    projectsContainer.appendChild(project);
  }

  static removeProject() {
    this.parentNode.remove();
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ "./src/ProjectController.js");
/* harmony import */ var _TaskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskController */ "./src/TaskController.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");




_UI__WEBPACK_IMPORTED_MODULE_2__["default"].attachListeners();

const testProject = new _ProjectController__WEBPACK_IMPORTED_MODULE_0__["default"]("Test");
const testTaskFirst = new _TaskController__WEBPACK_IMPORTED_MODULE_1__["default"]("Title 1", "low", "2022-08-15", "Henlo 1");
const testTaskSecond = new _TaskController__WEBPACK_IMPORTED_MODULE_1__["default"](
  "Title 2",
  "medium",
  "2021-09-28",
  "Henlo 2 but with longer texts to measure the actions I need to take in order to fix the width and put a container so that it doesn't overflow from the design I made"
);
const testTaskThird = new _TaskController__WEBPACK_IMPORTED_MODULE_1__["default"]("Title 3", "high", "2024-07-23", "Henlo 3");

testProject.addTask(testTaskFirst);
testProject.addTask(testTaskSecond);
testProject.addTask(testTaskThird);
console.log(testProject.getName());
console.log(testProject.getTasks());
_UI__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(testTaskFirst);
_UI__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(testTaskSecond);
_UI__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(testTaskThird);
_UI__WEBPACK_IMPORTED_MODULE_2__["default"].createProject(testProject.getName());
console.log(testProject.getTasks());

// todos:
// - create new ui components to create projects and tasks
// - create controller modules for projects and tasks to handle logic and data
// - projects should have empty arrays when created, and render from that array of objects to create UI elements

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxzREFBYTtBQUNiLHNEQUFhO0FBQ2Isc0RBQWE7QUFDYix5REFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrQ29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICB9XHJcblxyXG4gIHNldE5hbWUobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFza09iamVjdCkge1xyXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKFxyXG4gICAgICB0YXNrT2JqZWN0LnRpdGxlLFxyXG4gICAgICB0YXNrT2JqZWN0LnByaW9yaXR5LFxyXG4gICAgICB0YXNrT2JqZWN0LmR1ZURhdGUsXHJcbiAgICAgIHRhc2tPYmplY3QuZGVzY3JpcHRpb25cclxuICAgICk7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUYXNrKHRhc2tUaXRsZSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFRhc2tzKCkuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSB0YXNrVGl0bGUpO1xyXG4gICAgdGhpcy5nZXRUYXNrcygpLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIikge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGFza1RpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGFza1RpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNldFByaW9yaXR5KHRhc2tQcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0RHVlRGF0ZSh0YXNrRHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gdGFza0R1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXREZXRhaWxzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGV0YWlscztcclxuICB9XHJcblxyXG4gIHNldERldGFpbHModGFza0RldGFpbHMpIHtcclxuICAgIHRoaXMuZGV0YWlscyA9IHRhc2tEZXRhaWxzO1xyXG4gIH1cclxuXHJcbiAgZ2V0SXNEb25lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEb25lO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSXNEb25lKCkge1xyXG4gICAgaWYgKHRoaXMuaXNEb25lID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmlzRG9uZSA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEb25lID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuaXNEb25lID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tDb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XHJcbiAgc3RhdGljIGF0dGFjaExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1tb2RhbFwiKTtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb2RhbC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1tb2RhbFwiKTtcclxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LW1vZGFsXCIpO1xyXG4gICAgY29uc3QgcmVtb3ZlVGFza0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZS10YXNrXCIpO1xyXG5cclxuICAgIG9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIikpO1xyXG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IFVJLmdldE1vZGFsVmFsdWVzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFVJLmdldE1vZGFsVmFsdWVzKCkpO1xyXG4gICAgICBVSS5jcmVhdGVUYXNrKHZhbHVlcyk7XHJcbiAgICAgIFVJLmNsZWFyRm9ybUZpZWxkcygpO1xyXG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbW92ZVRhc2tCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT5cclxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5yZW1vdmVUYXNrKVxyXG4gICAgKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXNpemVBcmVhKCkge1xyXG4gICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IHRoaXMuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCByZXNpemVBcmVhKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRNb2RhbFZhbHVlcygpIHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcHJpb3JpdHlcIikudmFsdWU7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIikudmFsdWU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICByZXR1cm4geyB0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xlYXJGb3JtRmllbGRzKCkge1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIik7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wcmlvcml0eVwiKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG5cclxuICAgIHRpdGxlLnZhbHVlID0gXCJcIjtcclxuICAgIHByaW9yaXR5LnZhbHVlID0gXCJsb3dcIjtcclxuICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFza09iamVjdCkge1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcclxuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHJlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgdGFza1RleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCBjb21wbGV0aW9uQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY2hlY2tib3hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHJcbiAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xyXG5cclxuICAgIHJlbW92ZVRhc2tCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICByZW1vdmVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtdGFza1wiKTtcclxuICAgIHJlbW92ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuXHJcbiAgICB0YXNrVGV4dHMuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dHNcIik7XHJcbiAgICBzd2l0Y2ggKHRhc2tPYmplY3QucHJpb3JpdHkpIHtcclxuICAgICAgY2FzZSBcImxvd1wiOlxyXG4gICAgICAgIHRhc2tUZXh0cy5jbGFzc0xpc3QuYWRkKFwibG93XCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibWVkaXVtXCI6XHJcbiAgICAgICAgdGFza1RleHRzLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1cIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJoaWdoXCI6XHJcbiAgICAgICAgdGFza1RleHRzLmNsYXNzTGlzdC5hZGQoXCJoaWdoXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QudGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmRlc2NyaXB0aW9uO1xyXG5cclxuICAgIHRhc2tUZXh0cy5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgdGFza1RleHRzLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgdGFza0R1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xyXG4gICAgdGFza0R1ZURhdGUudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRpbWUtaW5wdXRcIik7XHJcbiAgICB0YXNrRHVlRGF0ZS52YWx1ZSA9IHRhc2tPYmplY3QuZHVlRGF0ZTtcclxuICAgIHRhc2tEdWVEYXRlRGl2LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuXHJcbiAgICBjb21wbGV0aW9uQ2hlY2suY2xhc3NMaXN0LmFkZChcImNvbXBsZXRpb24tY2hlY2tcIik7XHJcbiAgICBjaGVja2JveElucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICBjaGVja2JveElucHV0LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveC1pbnB1dFwiKTtcclxuXHJcbiAgICBjaGVja2JveElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoY2hlY2tib3hJbnB1dC5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChjaGVja2JveElucHV0LmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb21wbGV0aW9uQ2hlY2suYXBwZW5kQ2hpbGQoY2hlY2tib3hJbnB1dCk7XHJcblxyXG4gICAgcmVtb3ZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgVUkucmVtb3ZlVGFzayk7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVUYXNrQnV0dG9uKTtcclxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKHRhc2tUZXh0cyk7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZURpdik7XHJcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChjb21wbGV0aW9uQ2hlY2spO1xyXG5cclxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVUYXNrKCkge1xyXG4gICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcblxyXG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZVwiKTtcclxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcclxuXHJcbiAgICByZW1vdmVQcm9qZWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXByb2plY3RcIik7XHJcbiAgICByZW1vdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBVSS5yZW1vdmVQcm9qZWN0KTtcclxuXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlUHJvamVjdCgpIHtcclxuICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcblVJLmF0dGFjaExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgdGVzdFByb2plY3QgPSBuZXcgUHJvamVjdChcIlRlc3RcIik7XHJcbmNvbnN0IHRlc3RUYXNrRmlyc3QgPSBuZXcgVGFzayhcIlRpdGxlIDFcIiwgXCJsb3dcIiwgXCIyMDIyLTA4LTE1XCIsIFwiSGVubG8gMVwiKTtcclxuY29uc3QgdGVzdFRhc2tTZWNvbmQgPSBuZXcgVGFzayhcclxuICBcIlRpdGxlIDJcIixcclxuICBcIm1lZGl1bVwiLFxyXG4gIFwiMjAyMS0wOS0yOFwiLFxyXG4gIFwiSGVubG8gMiBidXQgd2l0aCBsb25nZXIgdGV4dHMgdG8gbWVhc3VyZSB0aGUgYWN0aW9ucyBJIG5lZWQgdG8gdGFrZSBpbiBvcmRlciB0byBmaXggdGhlIHdpZHRoIGFuZCBwdXQgYSBjb250YWluZXIgc28gdGhhdCBpdCBkb2Vzbid0IG92ZXJmbG93IGZyb20gdGhlIGRlc2lnbiBJIG1hZGVcIlxyXG4pO1xyXG5jb25zdCB0ZXN0VGFza1RoaXJkID0gbmV3IFRhc2soXCJUaXRsZSAzXCIsIFwiaGlnaFwiLCBcIjIwMjQtMDctMjNcIiwgXCJIZW5sbyAzXCIpO1xyXG5cclxudGVzdFByb2plY3QuYWRkVGFzayh0ZXN0VGFza0ZpcnN0KTtcclxudGVzdFByb2plY3QuYWRkVGFzayh0ZXN0VGFza1NlY29uZCk7XHJcbnRlc3RQcm9qZWN0LmFkZFRhc2sodGVzdFRhc2tUaGlyZCk7XHJcbmNvbnNvbGUubG9nKHRlc3RQcm9qZWN0LmdldE5hbWUoKSk7XHJcbmNvbnNvbGUubG9nKHRlc3RQcm9qZWN0LmdldFRhc2tzKCkpO1xyXG5VSS5jcmVhdGVUYXNrKHRlc3RUYXNrRmlyc3QpO1xyXG5VSS5jcmVhdGVUYXNrKHRlc3RUYXNrU2Vjb25kKTtcclxuVUkuY3JlYXRlVGFzayh0ZXN0VGFza1RoaXJkKTtcclxuVUkuY3JlYXRlUHJvamVjdCh0ZXN0UHJvamVjdC5nZXROYW1lKCkpO1xyXG5jb25zb2xlLmxvZyh0ZXN0UHJvamVjdC5nZXRUYXNrcygpKTtcclxuXHJcbi8vIHRvZG9zOlxyXG4vLyAtIGNyZWF0ZSBuZXcgdWkgY29tcG9uZW50cyB0byBjcmVhdGUgcHJvamVjdHMgYW5kIHRhc2tzXHJcbi8vIC0gY3JlYXRlIGNvbnRyb2xsZXIgbW9kdWxlcyBmb3IgcHJvamVjdHMgYW5kIHRhc2tzIHRvIGhhbmRsZSBsb2dpYyBhbmQgZGF0YVxyXG4vLyAtIHByb2plY3RzIHNob3VsZCBoYXZlIGVtcHR5IGFycmF5cyB3aGVuIGNyZWF0ZWQsIGFuZCByZW5kZXIgZnJvbSB0aGF0IGFycmF5IG9mIG9iamVjdHMgdG8gY3JlYXRlIFVJIGVsZW1lbnRzXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==