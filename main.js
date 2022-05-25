/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "default": () => (/* binding */ loadProjects)
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

function loadProjects() {
  const body = document.querySelector("body");

  body.appendChild(createSidebar());
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
/* harmony import */ var _ui_components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui_components/Header */ "./src/ui_components/Header.js");
/* harmony import */ var _ui_components_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_components/Projects */ "./src/ui_components/Projects.js");
/* harmony import */ var _ui_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui_components/Modal */ "./src/ui_components/Modal.js");




(0,_ui_components_Header__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_ui_components_Projects__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_ui_components_Modal__WEBPACK_IMPORTED_MODULE_2__.loadModalElements)();

window.addEventListener("DOMContentLoaded", _ui_components_Modal__WEBPACK_IMPORTED_MODULE_2__.attachListeners);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUU4Qzs7Ozs7Ozs7Ozs7Ozs7O0FDaEs5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOzs7Ozs7O1VDdERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUNJO0FBQ3VCOztBQUUzRSxpRUFBVTtBQUNWLG1FQUFZO0FBQ1osdUVBQWlCOztBQUVqQiw0Q0FBNEMsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWlfY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpX2NvbXBvbmVudHMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpX2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVMb2dvQ29udGFpbmVyKCkge1xuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbG9nb0VmZmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImgxXCIpO1xuICBsb2dvLnRleHRDb250ZW50ID0gXCJNYXliZVwiO1xuXG4gIGxvZ29FZmZlY3QuY2xhc3NMaXN0LmFkZChcImxvZ29FZmZlY3RcIik7XG4gIGxvZ29FZmZlY3QudGV4dENvbnRlbnQgPSBcIkRvXCI7XG5cbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nb0NvbnRhaW5lclwiKTtcblxuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29FZmZlY3QpO1xuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICByZXR1cm4gbG9nb0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIGN1cnJlbnRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50UHJvamVjdFwiKTtcbiAgY3VycmVudFByb2plY3QudGV4dENvbnRlbnQgPSBcIkFkZWxhaWRlIEx0ZC4gJiBDby5cIjtcblxuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3QpO1xuICByZXR1cm4gcHJvamVjdENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVMb2dvQ29udGFpbmVyKCkpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENvbnRhaW5lcigpKTtcbiAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuIiwiZnVuY3Rpb24gY3JlYXRlT3Blbk1vZGFsQnV0dG9uKCkge1xuICBjb25zdCBvcGVuTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIG9wZW5Nb2RhbC50eXBlID0gXCJidXR0b25cIjtcbiAgb3Blbk1vZGFsLmlkID0gXCJvcGVuTW9kYWxcIjtcbiAgb3Blbk1vZGFsLmNsYXNzTGlzdC5hZGQoXCJvcGVuTW9kYWxcIik7XG4gIG9wZW5Nb2RhbC50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIHJldHVybiBvcGVuTW9kYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKCkge1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICBtb2RhbENvbnRhaW5lci5pZCA9IFwibW9kYWxDb250YWluZXJcIjtcbiAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsQ29udGFpbmVyXCIpO1xuXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIGEgdGFza1wiO1xuXG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1vZGFsRWxlbWVudENvbnRhaW5lcihcbiAgICAgIFwidG9kb1RpdGxlXCIsXG4gICAgICBcIldoYXQgdG8gZG8/IDogXCIsXG4gICAgICBjcmVhdGVJbnB1dChcInRleHRcIiwgXCJ0b2RvVGl0bGVcIiwgXCJ0b2RvVGl0bGVcIilcbiAgICApXG4gICk7XG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1vZGFsRWxlbWVudENvbnRhaW5lcihcbiAgICAgIFwidG9kb1ByaW9yaXR5XCIsXG4gICAgICBcIkhvdyBpbXBvcnRhbnQgaXMgaXQ/IDogXCIsXG4gICAgICBjcmVhdGVEcm9wZG93bihcInRvZG9Qcmlvcml0eVwiLCBcInRvZG9Qcmlvcml0eVwiKVxuICAgIClcbiAgKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTW9kYWxFbGVtZW50Q29udGFpbmVyKFxuICAgICAgXCJ0b2RvRGF0ZVwiLFxuICAgICAgXCJXaGVuIGlzIGl0IGR1ZT8gOiBcIixcbiAgICAgIGNyZWF0ZUlucHV0KFwiZGF0ZVwiLCBcInRvZG9EYXRlXCIsIFwidG9kb0RhdGVcIilcbiAgICApXG4gICk7XG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1vZGFsRWxlbWVudENvbnRhaW5lcihcbiAgICAgIFwidG9kb0Rlc2NyaXB0aW9uXCIsXG4gICAgICBcIkFueSBkZXRhaWxzPyA6IFwiLFxuICAgICAgY3JlYXRlVGV4dEFyZWEoXCJ0b2RvRGVzY3JpcHRpb25cIiwgXCJ0b2RvRGVzY3JpcHRpb25cIilcbiAgICApXG4gICk7XG4gIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1vZGFsQnV0dG9uR3JvdXAoKSk7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50KTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIHJldHVybiBtb2RhbENvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxFbGVtZW50Q29udGFpbmVyKGxhYmVsRm9yLCBsYWJlbFRleHQsIGlucHV0RWxlbWVudCkge1xuICBjb25zdCBtb2RhbEVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblxuICBsYWJlbC5odG1sRm9yID0gbGFiZWxGb3I7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXG4gIG1vZGFsRWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWxFbGVtZW50Q29udGFpbmVyXCIpO1xuICBtb2RhbEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBtb2RhbEVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcblxuICByZXR1cm4gbW9kYWxFbGVtZW50Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dCh0eXBlLCBuYW1lLCBpZCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBpbnB1dC50eXBlID0gdHlwZTtcbiAgaW5wdXQubmFtZSA9IG5hbWU7XG4gIGlucHV0LmlkID0gaWQ7XG5cbiAgcmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEcm9wZG93bihuYW1lLCBpZCkge1xuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gIHNlbGVjdC5uYW1lID0gbmFtZTtcbiAgc2VsZWN0LmlkID0gaWQ7XG5cbiAgc2VsZWN0LmFwcGVuZENoaWxkKGNyZWF0ZURyb3Bkb3duT3B0aW9uKFwibG93XCIsIFwiTm90IE11Y2hcIikpO1xuICBzZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRHJvcGRvd25PcHRpb24oXCJtZWRpdW1cIiwgXCJTb21ld2hhdCBJbXBvcnRhbnRcIikpO1xuICBzZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRHJvcGRvd25PcHRpb24oXCJoaWdoXCIsIFwiVmVyeSBJbXBvcnRhbnRcIikpO1xuXG4gIHJldHVybiBzZWxlY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duT3B0aW9uKHZhbHVlLCB0ZXh0KSB7XG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEobmFtZSwgaWQpIHtcbiAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbiAgdGV4dEFyZWEubmFtZSA9IG5hbWU7XG4gIHRleHRBcmVhLmlkID0gaWQ7XG5cbiAgcmV0dXJuIHRleHRBcmVhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbEJ1dHRvbkdyb3VwKCkge1xuICBjb25zdCBtb2RhbEJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGFkZEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgYWRkQnV0dG9uLmlkID0gXCJzdWJtaXRNb2RhbFwiO1xuICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdE1vZGFsXCIpO1xuICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gIGNsb3NlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjbG9zZUJ1dHRvbi5pZCA9IFwiY2xvc2VNb2RhbFwiO1xuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2VNb2RhbFwiKTtcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG5cbiAgbW9kYWxCdXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKFwibW9kYWxCdXR0b25Hcm91cFwiKTtcblxuICBtb2RhbEJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIG1vZGFsQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gIHJldHVybiBtb2RhbEJ1dHRvbkdyb3VwO1xufVxuXG5mdW5jdGlvbiBhdHRhY2hMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Blbk1vZGFsXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxDb250YWluZXJcIik7XG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlTW9kYWxcIik7XG5cbiAgb3Blbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKSk7XG4gIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hvd1wiKSAmJiBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZE1vZGFsRWxlbWVudHMoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU9wZW5Nb2RhbEJ1dHRvbigpKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbCgpKTtcbn1cblxuZXhwb3J0IHsgbG9hZE1vZGFsRWxlbWVudHMsIGF0dGFjaExpc3RlbmVycyB9O1xuIiwiZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVcIik7XG5cbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgcmVtb3ZlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiLVwiO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVQcm9qZWN0XCIpO1xuXG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gIHByb2plY3QuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ1dHRvbik7XG5cbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzTGlzdCgpIHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgcHJvamVjdHNDb250YWluZXIuaWQgPSBcInByb2plY3RzQ29udGFpbmVyXCI7XG4gIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c0NvbnRhaW5lclwiKTtcblxuICBwcm9qZWN0c0xpc3QuaWQgPSBcInByb2plY3RzTGlzdFwiO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChcIkFkZWxhaWRlIEx0ZC4gJiBDby5cIikpO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChcIkxlbW9uIFNxdWVlemVcIikpO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChcIkJhcmJlY3VlIFBhcnR5XCIpKTtcbiAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3QoXCJXb3JrIGZyb20gSG9tZVwiKSk7XG5cbiAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0KTtcblxuICByZXR1cm4gcHJvamVjdHNDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblxuICBhc2lkZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGFzaWRlLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RzTGlzdCgpKTtcblxuICByZXR1cm4gYXNpZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlU2lkZWJhcigpKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIZWFkZXIgZnJvbSBcIi4vdWlfY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBsb2FkUHJvamVjdHMgZnJvbSBcIi4vdWlfY29tcG9uZW50cy9Qcm9qZWN0c1wiO1xuaW1wb3J0IHsgbG9hZE1vZGFsRWxlbWVudHMsIGF0dGFjaExpc3RlbmVycyB9IGZyb20gXCIuL3VpX2NvbXBvbmVudHMvTW9kYWxcIjtcblxubG9hZEhlYWRlcigpO1xubG9hZFByb2plY3RzKCk7XG5sb2FkTW9kYWxFbGVtZW50cygpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXR0YWNoTGlzdGVuZXJzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==