import ghlogo from "./img/githublogo.png";

function createFooter() {
  const footer = document.createElement("footer");
  const githubLogo = document.createElement("img");
  const profileLink = document.createElement("a");

  githubLogo.src = ghlogo;
  githubLogo.alt = "GitHub Logo";

  profileLink.href = `https://github.com/brkyurun`;
  profileLink.textContent = "brkyurun";

  footer.appendChild(githubLogo);
  footer.appendChild(profileLink);

  return footer;
}

export default function loadFooter() {
  const body = document.querySelector("body");

  body.appendChild(createFooter());
}
