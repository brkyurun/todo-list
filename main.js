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
/* harmony import */ var _ui_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui_components/Modal */ "./src/ui_components/Modal.js");
/* harmony import */ var _ui_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui_components/Footer */ "./src/ui_components/Footer.js");






(0,_ui_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_ui_components_Projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_ui_components_Modal__WEBPACK_IMPORTED_MODULE_3__.loadModalElements)();
(0,_ui_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"])();

window.addEventListener("DOMContentLoaded", _ui_components_Modal__WEBPACK_IMPORTED_MODULE_3__.attachListeners);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0RBQU07QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRThDOzs7Ozs7Ozs7Ozs7Ozs7QUNoSzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnNCO0FBQzBCO0FBQ0k7QUFDdUI7QUFDM0I7O0FBRWhELGlFQUFVO0FBQ1YsbUVBQVk7QUFDWix1RUFBaUI7QUFDakIsaUVBQVU7O0FBRVYsNENBQTRDLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWlfY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpX2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aV9jb21wb25lbnRzL01vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aV9jb21wb25lbnRzL1Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnaGxvZ28gZnJvbSBcIi4vaW1nL2dpdGh1YmxvZ28ucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IHByb2ZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgZ2l0aHViTG9nby5zcmMgPSBnaGxvZ287XG4gIGdpdGh1YkxvZ28uYWx0ID0gXCJHaXRIdWIgTG9nb1wiO1xuXG4gIHByb2ZpbGVMaW5rLmhyZWYgPSBgaHR0cHM6Ly9naXRodWIuY29tL2Jya3l1cnVuYDtcbiAgcHJvZmlsZUxpbmsudGV4dENvbnRlbnQgPSBcImJya3l1cnVuXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQocHJvZmlsZUxpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbn1cbiIsImZ1bmN0aW9uIGNyZWF0ZUxvZ29Db250YWluZXIoKSB7XG4gIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBsb2dvRWZmZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwiaDFcIik7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIk1heWJlXCI7XG5cbiAgbG9nb0VmZmVjdC5jbGFzc0xpc3QuYWRkKFwibG9nb0VmZmVjdFwiKTtcbiAgbG9nb0VmZmVjdC50ZXh0Q29udGVudCA9IFwiRG9cIjtcblxuICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvQ29udGFpbmVyXCIpO1xuXG4gIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0VmZmVjdCk7XG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIHJldHVybiBsb2dvQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q29udGFpbmVyKCkge1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRQcm9qZWN0XCIpO1xuICBjdXJyZW50UHJvamVjdC50ZXh0Q29udGVudCA9IFwiQWRlbGFpZGUgTHRkLiAmIENvLlwiO1xuXG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RDb250YWluZXJcIik7XG5cbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdCk7XG4gIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZUxvZ29Db250YWluZXIoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q29udGFpbmVyKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVPcGVuTW9kYWxCdXR0b24oKSB7XG4gIGNvbnN0IG9wZW5Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgb3Blbk1vZGFsLnR5cGUgPSBcImJ1dHRvblwiO1xuICBvcGVuTW9kYWwuaWQgPSBcIm9wZW5Nb2RhbFwiO1xuICBvcGVuTW9kYWwuY2xhc3NMaXN0LmFkZChcIm9wZW5Nb2RhbFwiKTtcbiAgb3Blbk1vZGFsLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgcmV0dXJuIG9wZW5Nb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoKSB7XG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIG1vZGFsQ29udGFpbmVyLmlkID0gXCJtb2RhbENvbnRhaW5lclwiO1xuICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWxDb250YWluZXJcIik7XG5cbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgYSB0YXNrXCI7XG5cbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTW9kYWxFbGVtZW50Q29udGFpbmVyKFxuICAgICAgXCJ0b2RvVGl0bGVcIixcbiAgICAgIFwiV2hhdCB0byBkbz8gOiBcIixcbiAgICAgIGNyZWF0ZUlucHV0KFwidGV4dFwiLCBcInRvZG9UaXRsZVwiLCBcInRvZG9UaXRsZVwiKVxuICAgIClcbiAgKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTW9kYWxFbGVtZW50Q29udGFpbmVyKFxuICAgICAgXCJ0b2RvUHJpb3JpdHlcIixcbiAgICAgIFwiSG93IGltcG9ydGFudCBpcyBpdD8gOiBcIixcbiAgICAgIGNyZWF0ZURyb3Bkb3duKFwidG9kb1ByaW9yaXR5XCIsIFwidG9kb1ByaW9yaXR5XCIpXG4gICAgKVxuICApO1xuICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICBjcmVhdGVNb2RhbEVsZW1lbnRDb250YWluZXIoXG4gICAgICBcInRvZG9EYXRlXCIsXG4gICAgICBcIldoZW4gaXMgaXQgZHVlPyA6IFwiLFxuICAgICAgY3JlYXRlSW5wdXQoXCJkYXRlXCIsIFwidG9kb0RhdGVcIiwgXCJ0b2RvRGF0ZVwiKVxuICAgIClcbiAgKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgY3JlYXRlTW9kYWxFbGVtZW50Q29udGFpbmVyKFxuICAgICAgXCJ0b2RvRGVzY3JpcHRpb25cIixcbiAgICAgIFwiQW55IGRldGFpbHM/IDogXCIsXG4gICAgICBjcmVhdGVUZXh0QXJlYShcInRvZG9EZXNjcmlwdGlvblwiLCBcInRvZG9EZXNjcmlwdGlvblwiKVxuICAgIClcbiAgKTtcbiAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWxCdXR0b25Hcm91cCgpKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnQpO1xuICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgcmV0dXJuIG1vZGFsQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbEVsZW1lbnRDb250YWluZXIobGFiZWxGb3IsIGxhYmVsVGV4dCwgaW5wdXRFbGVtZW50KSB7XG4gIGNvbnN0IG1vZGFsRWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gIGxhYmVsLmh0bWxGb3IgPSBsYWJlbEZvcjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG5cbiAgbW9kYWxFbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEVsZW1lbnRDb250YWluZXJcIik7XG4gIG1vZGFsRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIG1vZGFsRWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVsZW1lbnQpO1xuXG4gIHJldHVybiBtb2RhbEVsZW1lbnRDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIG5hbWUsIGlkKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGlucHV0LnR5cGUgPSB0eXBlO1xuICBpbnB1dC5uYW1lID0gbmFtZTtcbiAgaW5wdXQuaWQgPSBpZDtcblxuICByZXR1cm4gaW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duKG5hbWUsIGlkKSB7XG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgc2VsZWN0Lm5hbWUgPSBuYW1lO1xuICBzZWxlY3QuaWQgPSBpZDtcblxuICBzZWxlY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRHJvcGRvd25PcHRpb24oXCJsb3dcIiwgXCJOb3QgTXVjaFwiKSk7XG4gIHNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVEcm9wZG93bk9wdGlvbihcIm1lZGl1bVwiLCBcIlNvbWV3aGF0IEltcG9ydGFudFwiKSk7XG4gIHNlbGVjdC5hcHBlbmRDaGlsZChjcmVhdGVEcm9wZG93bk9wdGlvbihcImhpZ2hcIiwgXCJWZXJ5IEltcG9ydGFudFwiKSk7XG5cbiAgcmV0dXJuIHNlbGVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHJvcGRvd25PcHRpb24odmFsdWUsIHRleHQpIHtcbiAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcblxuICByZXR1cm4gb3B0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYShuYW1lLCBpZCkge1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuICB0ZXh0QXJlYS5uYW1lID0gbmFtZTtcbiAgdGV4dEFyZWEuaWQgPSBpZDtcblxuICByZXR1cm4gdGV4dEFyZWE7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsQnV0dG9uR3JvdXAoKSB7XG4gIGNvbnN0IG1vZGFsQnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgYWRkQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBhZGRCdXR0b24uaWQgPSBcInN1Ym1pdE1vZGFsXCI7XG4gIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0TW9kYWxcIik7XG4gIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgY2xvc2VCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNsb3NlQnV0dG9uLmlkID0gXCJjbG9zZU1vZGFsXCI7XG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZU1vZGFsXCIpO1xuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcblxuICBtb2RhbEJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJtb2RhbEJ1dHRvbkdyb3VwXCIpO1xuXG4gIG1vZGFsQnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgbW9kYWxCdXR0b25Hcm91cC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgcmV0dXJuIG1vZGFsQnV0dG9uR3JvdXA7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaExpc3RlbmVycygpIHtcbiAgY29uc3Qgb3Blbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuTW9kYWxcIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbENvbnRhaW5lclwiKTtcbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VNb2RhbFwiKTtcblxuICBvcGVuTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpKTtcbiAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIikpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaG93XCIpICYmIGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkTW9kYWxFbGVtZW50cygpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlT3Blbk1vZGFsQnV0dG9uKCkpO1xuICBib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1vZGFsKCkpO1xufVxuXG5leHBvcnQgeyBsb2FkTW9kYWxFbGVtZW50cywgYXR0YWNoTGlzdGVuZXJzIH07XG4iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCByZW1vdmVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZVwiKTtcblxuICByZW1vdmVQcm9qZWN0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICByZW1vdmVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCItXCI7XG4gIHJlbW92ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RcIik7XG5cbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgcHJvamVjdC5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnV0dG9uKTtcblxuICByZXR1cm4gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9IFwicHJvamVjdHNDb250YWluZXJcIjtcbiAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RzQ29udGFpbmVyXCIpO1xuXG4gIHByb2plY3RzTGlzdC5pZCA9IFwicHJvamVjdHNMaXN0XCI7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KFwiQWRlbGFpZGUgTHRkLiAmIENvLlwiKSk7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KFwiTGVtb24gU3F1ZWV6ZVwiKSk7XG4gIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KFwiQmFyYmVjdWUgUGFydHlcIikpO1xuICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdChcIldvcmsgZnJvbSBIb21lXCIpKTtcblxuICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xuXG4gIHJldHVybiBwcm9qZWN0c0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gIGFzaWRlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgYXNpZGUuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdHNMaXN0KCkpO1xuXG4gIHJldHVybiBhc2lkZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKCkpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgbG9hZEhlYWRlciBmcm9tIFwiLi91aV9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IGxvYWRQcm9qZWN0cyBmcm9tIFwiLi91aV9jb21wb25lbnRzL1Byb2plY3RzXCI7XG5pbXBvcnQgeyBsb2FkTW9kYWxFbGVtZW50cywgYXR0YWNoTGlzdGVuZXJzIH0gZnJvbSBcIi4vdWlfY29tcG9uZW50cy9Nb2RhbFwiO1xuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSBcIi4vdWlfY29tcG9uZW50cy9Gb290ZXJcIjtcblxubG9hZEhlYWRlcigpO1xubG9hZFByb2plY3RzKCk7XG5sb2FkTW9kYWxFbGVtZW50cygpO1xubG9hZEZvb3RlcigpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXR0YWNoTGlzdGVuZXJzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==