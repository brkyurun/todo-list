import "./styles.css";
import loadHeader from "./ui_components/Header";
import createSidebar from "./ui_components/Projects";
import createTodoContainer from "./ui_components/Tasks";
import { loadModalElements, attachListeners } from "./ui_components/Modal";
import loadFooter from "./ui_components/Footer";

const body = document.querySelector("body");
const projectsAndTodosContainer = document.createElement("main");
projectsAndTodosContainer.appendChild(createSidebar());
projectsAndTodosContainer.appendChild(createTodoContainer());

loadHeader();
body.appendChild(projectsAndTodosContainer);
loadModalElements();
loadFooter();

window.addEventListener("DOMContentLoaded", attachListeners);
