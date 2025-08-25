const spanPre = document.querySelector(".accr_0");
const spanPre1 = document.querySelector(".accr_1");

const animeText = () => {
  setTimeout(() => {
    spanPre.classList.remove("animated-text-appear2");
    spanPre.classList.add("animated-text-remove"); // disparition
    spanPre1.classList.add("animated-text-appear");
    animeTextRestart();
  }, 5000);
};

const animeTextRestart = () => {
  setTimeout(() => {
    spanPre1.classList.remove("animated-text-appear"); // disparition
    spanPre.classList.add("animated-text-appear2");
    animeText();
  }, 5000);
};

animeText();
