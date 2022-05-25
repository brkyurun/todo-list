import loadHeader from "./ui_components/Header";
import { loadModalElements, attachListeners } from "./ui_components/Modal";

loadHeader();
loadModalElements();

window.addEventListener("DOMContentLoaded", attachListeners);
