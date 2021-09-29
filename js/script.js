"use strict";

const langArrow = document.querySelector(".lang_arrow");

if (langArrow) {
  langArrow.addEventListener("click", function (e) {
    const langSub = document.querySelector(".lang_sub");
    langArrow.classList.toggle("_active");
    langSub.classList.toggle("_open");
  });
}
//спойлеры
const spollersArray = document.querySelectorAll("[data-spollers]");

if (spollersArray.lenghth > 0) {
  //Получение спойлеров
  const spollersRegular = Array.from(spollersArray).filter(function (
    item,
    index,
    self
  ) {
    return !item.dataset.spollers.split(",")[0];
  });
  //Инициализация спойлеров
  if (spollersRegular.lenghth > 0) {
    initSpollers(spollersRegular);
  }
}

//Инициализация спойлеров
function initSpollers(spollersArray, matchMedia = false) {
  spollersArray.forEach((spollersBlock) => {
    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
    if (matchMedia.matches || !matchMedia) {
      spollersBlock.classList.add("_init");
      initSpollerBody(spollersBlock);
      spollersBlock.addEventListener("click", setSpollerAction);
    } else {
      spollersBlock.classList.remove("_init");
      initSpollerBody(spollersBlock, false);
      spollersBlock.removeEventlistener("click", setSpollerAction);
    }
  });
}

function initSpollerBody(spollersBlock, hideSpollerBody = true) {
  const spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
  if (spollerTitles.lenghth > 0) {
    spollerTitles.forEach((spollerTitle) => {
      if (hideSpollerBody) {
        spollerTitle.removeAttribute("tabindex");
        if (!spollerTitle.classList.contains(".active")) {
          spollerTitle.nextElementSibling.hidden = true;
        }
      } else {
        spollerTitle.setAttribure("tabindex", "-1");
        spollerTitle.nextElementSibling.hidden = false;
      }
    });
  }
}
function setSpollerAction(e) {}
// const spollerButton = document.querySelector(".spoller_title");
// if (spollerButton) {
//   spollerButton.addEventListener("click", function (e) {
//     const block = document.querySelector(".our_mission__spoller_item");
//     const textBlock = document.querySelector(".spoller__text");
//     spollerButton.classList.toggle("_active");
//     block.classList.toggle("_active");
//     textBlock.classList.toggle("_open");
//   });
// }
//спойлеры
$(document).ready(function () {
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  if (mediaQuery.matches) {
    $(".blog__slider").slick({
      arrows: true,
      slidesToShow: 1,
      infinite: false,
      speed: 700,
      dots: true,
      autoplay: false,
    });
  }

  $(".blog__slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    speed: 700,
    dots: true,
    autoplay: false,
  });
});
