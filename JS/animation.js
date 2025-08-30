const spanPre = document.querySelector(".accr_0");
const spanPre1 = document.querySelector(".accr_1");
const cardRecru = document.querySelector(".recru");
const divConatinPole = document.querySelector(".detail_pole");
const divContainRecru = document.querySelector(".container");
const cardForma = document.querySelector(".format");
const divContainFormat = document.querySelector(".container_forma");
const menuNav = document.querySelector(".menu_burger");
const btnBurger = document.querySelector(".btn_burger");
const btnCloseModalFondateur = document.querySelector(".close_fondat");
const ModalFondat = document.getElementById("Modal_fondateur");
const btnCloseModalFondateur1 = document.querySelector(".close_fondat_1");
const cardAndy = document.getElementById("Andy");
const cardRaf = document.getElementById("Rafael");
const divRaf = document.querySelector(".raf");
const divAndy = document.querySelector(".andy");

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

const closeModal = () => {
  const btnClose = document.querySelector(".close");
  const btnCloseFromat = document.querySelector(".BtnClose");
  btnClose.addEventListener(
    "click",
    () => {
      divConatinPole.style.display = "none";
      divContainRecru.style.display = "none";
    },
    false
  );

  btnCloseFromat.addEventListener(
    "click",
    () => {
      divConatinPole.style.display = "none";
      divContainFormat.style.display = "none";
    },
    false
  );
};

const showDetailRecru = () => {
  cardRecru.addEventListener(
    "click",
    () => {
      (divConatinPole.style.display && divConatinPole.style.display == "") ||
      divConatinPole.style.display != "block"
        ? (divConatinPole.style.display = "block")
        : (divConatinPole.style.display = "none");

      (divContainRecru.style.display && divContainRecru.style.display == "") ||
      divContainRecru.style.display != "block"
        ? (divContainRecru.style.display = "block")
        : (divContainRecru.style.display = "none");
      closeModal();
    },
    false
  );
};

const showDetailFroma = () => {
  cardForma.addEventListener(
    "click",
    () => {
      (divConatinPole.style.display && divConatinPole.style.display == "") ||
      divConatinPole.style.display != "block"
        ? (divConatinPole.style.display = "block")
        : (divConatinPole.style.display = "none");

      (divContainFormat.style.display &&
        divContainFormat.style.display == "") ||
      divContainFormat.style.display != "block"
        ? (divContainFormat.style.display = "block")
        : (divContainFormat.style.display = "none");

      return closeModal();
    },
    false
  );
};

const showMenu = () => {
  btnBurger.addEventListener(
    "click",
    () => {
      (menuNav.style.display && menuNav.style.display == "") ||
      menuNav.style.display != "flex"
        ? (menuNav.style.display = "flex")
        : (menuNav.style.display = "none");
    },
    false
  );
};

const closeModalFondateur = () => {
  btnCloseModalFondateur.addEventListener("click", () => {
    ModalFondat.style.display = "none";
  });

  cardAndy.addEventListener("click", () => {
    ModalFondat.style.display = "block";
    divAndy.style.display = "block";
  });

  btnCloseModalFondateur1.addEventListener("click", () => {
    ModalFondat.style.display = "none";
  });

  cardRaf.addEventListener("click", () => {
    ModalFondat.style.display = "block";
    divRaf.style.display = "block";
  });

  return;
};

closeModalFondateur();
showMenu();
animeText();
showDetailRecru();
showDetailFroma();
