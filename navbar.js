const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const ofertyButton = document.querySelector("#oferty");
const kontaktButton = document.querySelector("#kontakt");

const firstPanel = document.querySelector(".first-panel");
const secondPanel = document.querySelector(".second-panel");
const thirdPanel = document.querySelector(".third-panel");
const fourthPanel = document.querySelector(".fourth-panel");

homeButton.addEventListener("click", function () {
  firstPanel.scrollIntoView({ behavior: "smooth" });
});

menuButton.addEventListener("click", function () {
  secondPanel.scrollIntoView({ behavior: "smooth" });
});

ofertyButton.addEventListener("click", function () {
  thirdPanel.scrollIntoView({ behavior: "smooth" });
});

kontaktButton.addEventListener("click", function () {
  fourthPanel.scrollIntoView({ behavior: "smooth" });
});
