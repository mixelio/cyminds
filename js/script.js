"use strict";

const langArrow = document.querySelector(".lang_arrow");

if (langArrow) {
  langArrow.addEventListener("click", function (e) {
    const langSub = document.querySelector(".lang_sub");
    langArrow.classList.toggle("_active");
    langSub.classList.toggle("_open");
  });
}

$(function () {
  // открываем вкладку по умолчанию
  $(".active__item .spoller__text").slideDown();

  $("#accordion .spoller__title").on("click", function () {
    $("#accordion .spoller__text").not($(this).next()).slideUp(299);

    $(".our_mission__spoller_item").removeClass("active__item");
    $(this).next().slideDown(299).parent().addClass("active__item");
  });
});

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

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
