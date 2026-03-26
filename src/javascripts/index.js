import "../stylesheets/style.css";

const pages = ["sound.html"];

document.getElementById("randomButton").addEventListener("click", function (e) {
  e.preventDefault();

  const i = Math.floor(Math.random() * pages.length);
  window.location.href = "./sounds/" + pages[i];
});
