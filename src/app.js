import createHeader from "./modules/Header";
import {
  createOpenModalButton,
  createModal,
  attachListeners,
} from "./modules/Modal";

const body = document.querySelector("body");

createHeader();
body.appendChild(createOpenModalButton());
body.appendChild(createModal());

window.addEventListener("DOMContentLoaded", attachListeners);
