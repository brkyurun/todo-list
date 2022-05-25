import "./styles.css";
import loadHeader from "./ui_components/Header";
import loadProjects from "./ui_components/Projects";
import { loadModalElements, attachListeners } from "./ui_components/Modal";
import loadFooter from "./ui_components/Footer";

loadHeader();
loadProjects();
loadModalElements();
loadFooter();

window.addEventListener("DOMContentLoaded", attachListeners);
