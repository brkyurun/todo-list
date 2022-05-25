import loadHeader from "./ui_components/Header";
import loadProjects from "./ui_components/Projects";
import { loadModalElements, attachListeners } from "./ui_components/Modal";

loadHeader();
loadProjects();
loadModalElements();

window.addEventListener("DOMContentLoaded", attachListeners);
