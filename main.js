/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ui_components/Footer.js":
/*!*************************************!*\
  !*** ./src/ui_components/Footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _img_githublogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/githublogo.png */ "./src/ui_components/img/githublogo.png");


function createFooter() {
  const footer = document.createElement("footer");
  const githubLogo = document.createElement("img");
  const profileLink = document.createElement("a");

  githubLogo.src = _img_githublogo_png__WEBPACK_IMPORTED_MODULE_0__;
  githubLogo.alt = "GitHub Logo";

  profileLink.href = `https://github.com/brkyurun`;
  profileLink.textContent = "brkyurun";

  footer.appendChild(githubLogo);
  footer.appendChild(profileLink);

  return footer;
}

function loadFooter() {
  const body = document.querySelector("body");

  body.appendChild(createFooter());
}


/***/ }),

/***/ "./src/ui_components/Header.js":
/*!*************************************!*\
  !*** ./src/ui_components/Header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHeader)
/* harmony export */ });
function createLogoContainer() {
  const logoContainer = document.createElement("div");
  const logo = document.createElement("h1");
  const logoEffect = document.createElement("span");

  logo.classList.add("h1");
  logo.textContent = "Maybe";

  logoEffect.classList.add("logoEffect");
  logoEffect.textContent = "Do";

  logoContainer.classList.add("logoContainer");

  logo.appendChild(logoEffect);
  logoContainer.appendChild(logo);
  return logoContainer;
}

function createProjectContainer() {
  const projectContainer = document.createElement("div");
  const currentProject = document.createElement("h2");

  currentProject.classList.add("currentProject");
  currentProject.textContent = "Adelaide Ltd. & Co.";

  projectContainer.classList.add("projectContainer");

  projectContainer.appendChild(currentProject);
  return projectContainer;
}

function loadHeader() {
  const header = document.createElement("header");
  const body = document.querySelector("body");

  header.appendChild(createLogoContainer());
  header.appendChild(createProjectContainer());
  body.appendChild(header);
}


/***/ }),

/***/ "./src/ui_components/Modal.js":
/*!************************************!*\
  !*** ./src/ui_components/Modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachListeners": () => (/* binding */ attachListeners),
/* harmony export */   "loadModalElements": () => (/* binding */ loadModalElements)
/* harmony export */ });
function createOpenModalButton() {
  const openModal = document.createElement("button");

  openModal.type = "button";
  openModal.id = "openModal";
  openModal.classList.add("openModal");
  openModal.textContent = "+";

  return openModal;
}

function createModal() {
  const modalContainer = document.createElement("div");
  const modal = document.createElement("div");
  const modalTitle = document.createElement("h1");
  const formElement = document.createElement("form");

  modalContainer.id = "modalContainer";
  modalContainer.classList.add("modalContainer");

  modal.classList.add("modal");
  modalTitle.textContent = "Add a task";

  formElement.appendChild(
    createModalElementContainer(
      "todoTitle",
      "What to do? : ",
      createInput("text", "todoTitle", "todoTitle")
    )
  );
  formElement.appendChild(
    createModalElementContainer(
      "todoPriority",
      "How important is it? : ",
      createDropdown("todoPriority", "todoPriority")
    )
  );
  formElement.appendChild(
    createModalElementContainer(
      "todoDate",
      "When is it due? : ",
      createInput("date", "todoDate", "todoDate")
    )
  );
  formElement.appendChild(
    createModalElementContainer(
      "todoDescription",
      "Any details? : ",
      createTextArea("todoDescription", "todoDescription")
    )
  );
  formElement.appendChild(createModalButtonGroup());

  modal.appendChild(modalTitle);
  modal.appendChild(formElement);
  modalContainer.appendChild(modal);

  return modalContainer;
}

function createModalElementContainer(labelFor, labelText, inputElement) {
  const modalElementContainer = document.createElement("div");
  const label = document.createElement("label");

  label.htmlFor = labelFor;
  label.textContent = labelText;

  modalElementContainer.classList.add("modalElementContainer");
  modalElementContainer.appendChild(label);
  modalElementContainer.appendChild(inputElement);

  return modalElementContainer;
}

function createInput(type, name, id) {
  const input = document.createElement("input");

  input.type = type;
  input.name = name;
  input.id = id;

  return input;
}

function createDropdown(name, id) {
  const select = document.createElement("select");

  select.name = name;
  select.id = id;

  select.appendChild(createDropdownOption("low", "Not Much"));
  select.appendChild(createDropdownOption("medium", "Somewhat Important"));
  select.appendChild(createDropdownOption("high", "Very Important"));

  return select;
}

function createDropdownOption(value, text) {
  const option = document.createElement("option");

  option.value = value;
  option.textContent = text;

  return option;
}

function createTextArea(name, id) {
  const textArea = document.createElement("textarea");

  textArea.name = name;
  textArea.id = id;

  return textArea;
}

function createModalButtonGroup() {
  const modalButtonGroup = document.createElement("div");
  const addButton = document.createElement("button");
  const closeButton = document.createElement("button");

  addButton.type = "button";
  addButton.id = "submitModal";
  addButton.classList.add("submitModal");
  addButton.textContent = "Add";

  closeButton.type = "button";
  closeButton.id = "closeModal";
  closeButton.classList.add("closeModal");
  closeButton.textContent = "Close";

  modalButtonGroup.classList.add("modalButtonGroup");

  modalButtonGroup.appendChild(addButton);
  modalButtonGroup.appendChild(closeButton);

  return modalButtonGroup;
}

function attachListeners() {
  const openModal = document.querySelector(".openModal");
  const modal = document.querySelector(".modalContainer");
  const closeModal = document.querySelector(".closeModal");

  openModal.addEventListener("click", () => modal.classList.add("show"));
  closeModal.addEventListener("click", () => modal.classList.remove("show"));

  window.addEventListener("keydown", (e) => {
    if (modal.classList.contains("show") && e.key === "Escape") {
      modal.classList.remove("show");
    }
  });
}

function loadModalElements() {
  const body = document.querySelector("body");

  body.appendChild(createOpenModalButton());
  body.appendChild(createModal());
}




/***/ }),

/***/ "./src/ui_components/Projects.js":
/*!***************************************!*\
  !*** ./src/ui_components/Projects.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSidebar)
/* harmony export */ });
function createProject(name) {
  const project = document.createElement("div");
  const projectName = document.createElement("li");
  const removeProjectButton = document.createElement("button");

  projectName.textContent = name;
  projectName.classList.add("projectName");

  removeProjectButton.type = "button";
  removeProjectButton.textContent = "-";
  removeProjectButton.classList.add("removeProject");

  project.classList.add("project");

  project.appendChild(projectName);
  project.appendChild(removeProjectButton);

  return project;
}

function createProjectsList() {
  const projectsContainer = document.createElement("div");
  const projectsList = document.createElement("ul");

  projectsContainer.id = "projectsContainer";
  projectsContainer.classList.add("projectsContainer");

  projectsList.id = "projectsList";
  projectsList.appendChild(createProject("Adelaide Ltd. & Co."));
  projectsList.appendChild(createProject("Lemon Squeeze"));
  projectsList.appendChild(createProject("Barbecue Party"));
  projectsList.appendChild(createProject("Work from Home"));

  projectsContainer.appendChild(projectsList);

  return projectsContainer;
}

function createSidebar() {
  const aside = document.createElement("aside");
  const title = document.createElement("h2");

  title.textContent = "Projects";

  aside.appendChild(title);
  aside.appendChild(createProjectsList());

  return aside;
}


/***/ }),

/***/ "./src/ui_components/Tasks.js":
/*!************************************!*\
  !*** ./src/ui_components/Tasks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoContainer)
/* harmony export */ });
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

function createTodoContainer() {
  const todoContainer = document.createElement("section");
  const title = document.createElement("h2");

  title.textContent = "To Do";
  todoContainer.classList.add("todoContainer");

  todoContainer.appendChild(title);
  todoContainer.appendChild(createTodoList());
  return todoContainer;
}


/***/ }),

/***/ "./src/ui_components/img/githublogo.png":
/*!**********************************************!*\
  !*** ./src/ui_components/img/githublogo.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ui_components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_components/Header */ "./src/ui_components/Header.js");
/* harmony import */ var _ui_components_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_components/Projects */ "./src/ui_components/Projects.js");
/* harmony import */ var _ui_components_Tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui_components/Tasks */ "./src/ui_components/Tasks.js");
/* harmony import */ var _ui_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_components/Modal */ "./src/ui_components/Modal.js");
/* harmony import */ var _ui_components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui_components/Footer */ "./src/ui_components/Footer.js");







const body = document.querySelector("body");
const projectsAndTodosContainer = document.createElement("main");
projectsAndTodosContainer.appendChild((0,_ui_components_Projects__WEBPACK_IMPORTED_MODULE_2__["default"])());
projectsAndTodosContainer.appendChild((0,_ui_components_Tasks__WEBPACK_IMPORTED_MODULE_3__["default"])());

(0,_ui_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
body.appendChild(projectsAndTodosContainer);
(0,_ui_components_Modal__WEBPACK_IMPORTED_MODULE_4__.loadModalElements)();
(0,_ui_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"])();

window.addEventListener("DOMContentLoaded", _ui_components_Modal__WEBPACK_IMPORTED_MODULE_4__.attachListeners);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0RBQU07QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRThDOzs7Ozs7Ozs7Ozs7Ozs7QUNoSzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQjtBQUMwQjtBQUNLO0FBQ0c7QUFDbUI7QUFDM0I7O0FBRWhEO0FBQ0E7QUFDQSxzQ0FBc0MsbUVBQWE7QUFDbkQsc0NBQXNDLGdFQUFtQjs7QUFFekQsaUVBQVU7QUFDVjtBQUNBLHVFQUFpQjtBQUNqQixpRUFBVTs7QUFFViw0Q0FBNEMsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz8xNTUzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aV9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWlfY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpX2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpX2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpX2NvbXBvbmVudHMvVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGdobG9nbyBmcm9tIFwiLi9pbWcvZ2l0aHVibG9nby5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgcHJvZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBnaXRodWJMb2dvLnNyYyA9IGdobG9nbztcbiAgZ2l0aHViTG9nby5hbHQgPSBcIkdpdEh1YiBMb2dvXCI7XG5cbiAgcHJvZmlsZUxpbmsuaHJlZiA9IGBodHRwczovL2dpdGh1Yi5jb20vYnJreXVydW5gO1xuICBwcm9maWxlTGluay50ZXh0Q29udGVudCA9IFwiYnJreXVydW5cIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTG9nbyk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChwcm9maWxlTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEZvb3RlcigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlTG9nb0NvbnRhaW5lcigpIHtcbiAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGxvZ29FZmZlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJoMVwiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiTWF5YmVcIjtcblxuICBsb2dvRWZmZWN0LmNsYXNzTGlzdC5hZGQoXCJsb2dvRWZmZWN0XCIpO1xuICBsb2dvRWZmZWN0LnRleHRDb250ZW50ID0gXCJEb1wiO1xuXG4gIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29Db250YWluZXJcIik7XG5cbiAgbG9nby5hcHBlbmRDaGlsZChsb2dvRWZmZWN0KTtcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgcmV0dXJuIGxvZ29Db250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RDb250YWluZXIoKSB7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuICBjdXJyZW50UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFByb2plY3RcIik7XG4gIGN1cnJlbnRQcm9qZWN0LnRleHRDb250ZW50ID0gXCJBZGVsYWlkZSBMdGQuICYgQ28uXCI7XG5cbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENvbnRhaW5lclwiKTtcblxuICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0KTtcbiAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTG9nb0NvbnRhaW5lcigpKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDb250YWluZXIoKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZU9wZW5Nb2RhbEJ1dHRvbigpIHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBvcGVuTW9kYWwudHlwZSA9IFwiYnV0dG9uXCI7XG4gIG9wZW5Nb2RhbC5pZCA9IFwib3Blbk1vZGFsXCI7XG4gIG9wZW5Nb2RhbC5jbGFzc0xpc3QuYWRkKFwib3Blbk1vZGFsXCIpO1xuICBvcGVuTW9kYWwudGV4dENvbnRlbnQgPSBcIitcIjtcblxuICByZXR1cm4gb3Blbk1vZGFsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbCgpIHtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgbW9kYWxDb250YWluZXIuaWQgPSBcIm1vZGFsQ29udGFpbmVyXCI7XG4gIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbENvbnRhaW5lclwiKTtcblxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBhIHRhc2tcIjtcblxuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNb2RhbEVsZW1lbnRDb250YWluZXIoXG4gICAgICBcInRvZG9UaXRsZVwiLFxuICAgICAgXCJXaGF0IHRvIGRvPyA6IFwiLFxuICAgICAgY3JlYXRlSW5wdXQoXCJ0ZXh0XCIsIFwidG9kb1RpdGxlXCIsIFwidG9kb1RpdGxlXCIpXG4gICAgKVxuICApO1xuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNb2RhbEVsZW1lbnRDb250YWluZXIoXG4gICAgICBcInRvZG9Qcmlvcml0eVwiLFxuICAgICAgXCJIb3cgaW1wb3J0YW50IGlzIGl0PyA6IFwiLFxuICAgICAgY3JlYXRlRHJvcGRvd24oXCJ0b2RvUHJpb3JpdHlcIiwgXCJ0b2RvUHJpb3JpdHlcIilcbiAgICApXG4gICk7XG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1vZGFsRWxlbWVudENvbnRhaW5lcihcbiAgICAgIFwidG9kb0RhdGVcIixcbiAgICAgIFwiV2hlbiBpcyBpdCBkdWU/IDogXCIsXG4gICAgICBjcmVhdGVJbnB1dChcImRhdGVcIiwgXCJ0b2RvRGF0ZVwiLCBcInRvZG9EYXRlXCIpXG4gICAgKVxuICApO1xuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNb2RhbEVsZW1lbnRDb250YWluZXIoXG4gICAgICBcInRvZG9EZXNjcmlwdGlvblwiLFxuICAgICAgXCJBbnkgZGV0YWlscz8gOiBcIixcbiAgICAgIGNyZWF0ZVRleHRBcmVhKFwidG9kb0Rlc2NyaXB0aW9uXCIsIFwidG9kb0Rlc2NyaXB0aW9uXCIpXG4gICAgKVxuICApO1xuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbEJ1dHRvbkdyb3VwKCkpO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtRWxlbWVudCk7XG4gIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICByZXR1cm4gbW9kYWxDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsRWxlbWVudENvbnRhaW5lcihsYWJlbEZvciwgbGFiZWxUZXh0LCBpbnB1dEVsZW1lbnQpIHtcbiAgY29uc3QgbW9kYWxFbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cbiAgbGFiZWwuaHRtbEZvciA9IGxhYmVsRm9yO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblxuICBtb2RhbEVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsRWxlbWVudENvbnRhaW5lclwiKTtcbiAgbW9kYWxFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgbW9kYWxFbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RWxlbWVudCk7XG5cbiAgcmV0dXJuIG1vZGFsRWxlbWVudENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgbmFtZSwgaWQpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgaW5wdXQudHlwZSA9IHR5cGU7XG4gIGlucHV0Lm5hbWUgPSBuYW1lO1xuICBpbnB1dC5pZCA9IGlkO1xuXG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd24obmFtZSwgaWQpIHtcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICBzZWxlY3QubmFtZSA9IG5hbWU7XG4gIHNlbGVjdC5pZCA9IGlkO1xuXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVEcm9wZG93bk9wdGlvbihcImxvd1wiLCBcIk5vdCBNdWNoXCIpKTtcbiAgc2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZURyb3Bkb3duT3B0aW9uKFwibWVkaXVtXCIsIFwiU29tZXdoYXQgSW1wb3J0YW50XCIpKTtcbiAgc2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZURyb3Bkb3duT3B0aW9uKFwiaGlnaFwiLCBcIlZlcnkgSW1wb3J0YW50XCIpKTtcblxuICByZXR1cm4gc2VsZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bk9wdGlvbih2YWx1ZSwgdGV4dCkge1xuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gIHJldHVybiBvcHRpb247XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKG5hbWUsIGlkKSB7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG4gIHRleHRBcmVhLm5hbWUgPSBuYW1lO1xuICB0ZXh0QXJlYS5pZCA9IGlkO1xuXG4gIHJldHVybiB0ZXh0QXJlYTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxCdXR0b25Hcm91cCgpIHtcbiAgY29uc3QgbW9kYWxCdXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBhZGRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGFkZEJ1dHRvbi5pZCA9IFwic3VibWl0TW9kYWxcIjtcbiAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRNb2RhbFwiKTtcbiAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICBjbG9zZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgY2xvc2VCdXR0b24uaWQgPSBcImNsb3NlTW9kYWxcIjtcbiAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlTW9kYWxcIik7XG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG4gIG1vZGFsQnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChcIm1vZGFsQnV0dG9uR3JvdXBcIik7XG5cbiAgbW9kYWxCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICBtb2RhbEJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICByZXR1cm4gbW9kYWxCdXR0b25Hcm91cDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoTGlzdGVuZXJzKCkge1xuICBjb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wZW5Nb2RhbFwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsQ29udGFpbmVyXCIpO1xuICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZU1vZGFsXCIpO1xuXG4gIG9wZW5Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIikpO1xuICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKG1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcInNob3dcIikgJiYgZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRNb2RhbEVsZW1lbnRzKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVPcGVuTW9kYWxCdXR0b24oKSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwoKSk7XG59XG5cbmV4cG9ydCB7IGxvYWRNb2RhbEVsZW1lbnRzLCBhdHRhY2hMaXN0ZW5lcnMgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHJlbW92ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYW1lXCIpO1xuXG4gIHJlbW92ZVByb2plY3RCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHJlbW92ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIjtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlUHJvamVjdFwiKTtcblxuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBwcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdXR0b24pO1xuXG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0c0xpc3QoKSB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIHByb2plY3RzQ29udGFpbmVyLmlkID0gXCJwcm9qZWN0c0NvbnRhaW5lclwiO1xuICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNDb250YWluZXJcIik7XG5cbiAgcHJvamVjdHNMaXN0LmlkID0gXCJwcm9qZWN0c0xpc3RcIjtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoXCJBZGVsYWlkZSBMdGQuICYgQ28uXCIpKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoXCJMZW1vbiBTcXVlZXplXCIpKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoXCJCYXJiZWN1ZSBQYXJ0eVwiKSk7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KFwiV29yayBmcm9tIEhvbWVcIikpO1xuXG4gIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG5cbiAgcmV0dXJuIHByb2plY3RzQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWRlYmFyKCkge1xuICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgYXNpZGUuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBhc2lkZS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0c0xpc3QoKSk7XG5cbiAgcmV0dXJuIGFzaWRlO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0odGl0bGUsIGRldGFpbHMpIHtcbiAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByZW1vdmVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdG9kb1RleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0b2RvRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBjb21wbGV0aW9uQ2hlY2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb21wbGV0aW9uQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgdG9kb0l0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9JdGVtXCIpO1xuXG4gIHJlbW92ZVRvZG9CdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHJlbW92ZVRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVRvZG9cIik7XG4gIHJlbW92ZVRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBcIi1cIjtcblxuICB0b2RvVGV4dHMuY2xhc3NMaXN0LmFkZChcInRvZG9UZXh0c1wiKTtcbiAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHRvZG9EZXRhaWxzLnRleHRDb250ZW50ID0gZGV0YWlscztcbiAgdG9kb1RleHRzLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gIHRvZG9UZXh0cy5hcHBlbmRDaGlsZCh0b2RvRGV0YWlscyk7XG5cbiAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImR1ZWRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aW1lSW5wdXRcIik7XG4gIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICBjb21wbGV0aW9uQ2hlY2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRpb25DaGVja1wiKTtcbiAgY29tcGxldGlvbkNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNvbXBsZXRpb25DaGVja2JveC5uYW1lID0gXCJjb21wbGV0aW9uY2hlY2tcIjtcbiAgY29tcGxldGlvbkNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveElucHV0XCIpO1xuICBjb21wbGV0aW9uQ2hlY2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGlvbkNoZWNrYm94KTtcblxuICB0b2RvSXRlbS5hcHBlbmRDaGlsZChyZW1vdmVUb2RvQnV0dG9uKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RleHRzKTtcbiAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gIHRvZG9JdGVtLmFwcGVuZENoaWxkKGNvbXBsZXRpb25DaGVja0Rpdik7XG5cbiAgcmV0dXJuIHRvZG9JdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvTGlzdCgpIHtcbiAgLy9pZGVhISB0YWtlIGFuIGFycmF5IG9mIG9iamVjdHMgYW5kIGxvb3Agb3ZlciB0aGVtIHRvIGNyZWF0ZSB0aGUgdG9kb0l0ZW1zIVxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgdG9kb0xpc3QuY2xhc3NMaXN0LmFkZChcInRvZG9MaXN0XCIpO1xuICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVUb2RvSXRlbShcIlRpdGxlIDFcIiwgXCJIZW5sbyAxXCIpKTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlVG9kb0l0ZW0oXG4gICAgICBcIlRpdGxlIDJcIixcbiAgICAgIGBIZW5sbyAyIGJ1dCB3aXRoIGxvbmdlciB0ZXh0cyB0byBtZWFzdXJlIHRoZSBhY3Rpb25zIEkgbmVlZCB0b1xuICAgIHRha2UgaW4gb3JkZXIgdG8gZml4IHRoZSB3aWR0aCBhbmQgcHV0IGEgY29udGFpbmVyIHNvIHRoYXQgaXRcbiAgICBkb2Vzbid0IG92ZXJmbG93IGZyb20gdGhlIGRlc2lnbiBJIG1hZGVgXG4gICAgKVxuICApO1xuICB0b2RvTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVUb2RvSXRlbShcIlRpdGxlIDNcIiwgXCJIZW5sbyAzXCIpKTtcblxuICByZXR1cm4gdG9kb0xpc3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9Db250YWluZXIoKSB7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvIERvXCI7XG4gIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG9Db250YWluZXJcIik7XG5cbiAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0xpc3QoKSk7XG4gIHJldHVybiB0b2RvQ29udGFpbmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgbG9hZEhlYWRlciBmcm9tIFwiLi91aV9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZVNpZGViYXIgZnJvbSBcIi4vdWlfY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IGNyZWF0ZVRvZG9Db250YWluZXIgZnJvbSBcIi4vdWlfY29tcG9uZW50cy9UYXNrc1wiO1xuaW1wb3J0IHsgbG9hZE1vZGFsRWxlbWVudHMsIGF0dGFjaExpc3RlbmVycyB9IGZyb20gXCIuL3VpX2NvbXBvbmVudHMvTW9kYWxcIjtcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL3VpX2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHByb2plY3RzQW5kVG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbnByb2plY3RzQW5kVG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcbnByb2plY3RzQW5kVG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NvbnRhaW5lcigpKTtcblxubG9hZEhlYWRlcigpO1xuYm9keS5hcHBlbmRDaGlsZChwcm9qZWN0c0FuZFRvZG9zQ29udGFpbmVyKTtcbmxvYWRNb2RhbEVsZW1lbnRzKCk7XG5sb2FkRm9vdGVyKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhdHRhY2hMaXN0ZW5lcnMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9