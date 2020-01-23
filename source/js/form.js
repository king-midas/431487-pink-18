var showButton = document.querySelector(".main-nav__toggle");

var navMenu = document.querySelector(".main-nav__list");

var pageHeader = document.querySelector(".page-header");

var downloadApp = document.querySelector(".download-app");

var downlaodAppTitle = document.querySelector(".download-app__title");

var pageHeaderLink = document.querySelector(".page-header__logo-link");

var navMenuClosed = document.querySelector(".page-header__wrapper");

var burgerPic = document.querySelector(".main-nav__icon-burger");

var crossPic = document.querySelector(".main-nav__icon-cross");

var pageTitle = document.querySelector(".page-title");

navMenu.classList.add("main-nav__list--closed");
pageHeader.classList.remove("page-header--full");
pageHeaderLink.classList.add("page-header__logo-link--short");
pageTitle.classList.add("page-title--short");
showButton.addEventListener("click", function(evt){
  evt.preventDefault();
  pageHeaderLink.classList.toggle("page-header__logo-link--short");
  pageTitle.classList.toggle("page-title--short");
  navMenu.classList.toggle("main-nav__list--closed");
  navMenuClosed.classList.toggle(".page-header__wrapper--closed");
  crossPic.classList.toggle("main-nav__icon-cross--hide");
  burgerPic.classList.toggle("main-nav__icon-burger--hide");
  pageHeader.classList.toggle("page-header--full");
});
