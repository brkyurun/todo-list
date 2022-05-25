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

export default function loadProjects() {
  const body = document.querySelector("body");

  body.appendChild(createSidebar());
}
