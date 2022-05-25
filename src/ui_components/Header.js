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

export default function loadHeader() {
  const header = document.createElement("header");
  const body = document.querySelector("body");

  header.appendChild(createLogoContainer());
  header.appendChild(createProjectContainer());
  body.appendChild(header);
}
