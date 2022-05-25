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

export { loadModalElements, attachListeners };
