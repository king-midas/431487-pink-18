var showButton = document.querySelector(".main-nav__toggle");

var navMenu = document.querySelector(".main-nav__list");

var pageHeader = document.querySelector(".page-header");

var downloadApp = document.querySelector(".download-app");

var downloadAppWrapper = document.querySelector(".download-app__wrapper");

var downlaodAppTitle = document.querySelector(".download-app__title");

var pageHeaderLink = document.querySelector(".page-header__logo-link");

var navMenuClosed = document.querySelector(".page-header__wrapper");

var burgerPic = document.querySelector(".main-nav__icon-burger");

var crossPic = document.querySelector(".main-nav__icon-cross");

navMenu.classList.add("main-nav__list--closed");
pageHeader.classList.remove("page-header--full");
downlaodAppTitle.classList.add("download-app__title--short");
pageHeaderLink.classList.add("page-header__logo-link--short");
showButton.classList.add("main-nav__toggle--show");
downloadApp.classList.toggle("download-app--short");


showButton.addEventListener("click", function(evt){
  evt.preventDefault();
  pageHeaderLink.classList.toggle("page-header__logo-link--short");
  downlaodAppTitle.classList.toggle("download-app__title--short");
  downloadApp.classList.toggle("download-app--short");
  downloadApp.classList.toggle("download-app--full");
  navMenu.classList.toggle("main-nav__list--closed");
  navMenuClosed.classList.toggle(".page-header__wrapper--closed");
  crossPic.classList.toggle("main-nav__icon-cross--hide");
  burgerPic.classList.toggle("main-nav__icon-burger--hide");
  pageHeader.classList.toggle("page-header--full");
  downloadAppWrapper.classList.toggle("download-app__wrapper--short");
  showButton.classList.toggle("main-nav__toggle--short");
});
