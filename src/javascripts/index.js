import "../stylesheets/style.css";

initRandomButton();

function initRandomButton() {
  const btn = document.querySelector("#randomButtonHead");

  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    goToRandomSounds();
  });
}

function goToRandomSounds() {
  const sounds = ["../sounds/sound.html"];

  const randomIndex = Math.floor(Math.random() * sounds.length);
  const randomPage = sounds[randomIndex];

  window.location.href = randomPage;
}
