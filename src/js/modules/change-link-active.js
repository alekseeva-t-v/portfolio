import { isVisibleElement } from './visible-element';

function changeActiveElem(elem, menuLink) {
  const elementsMenuList = document.querySelectorAll('.menu-window__link');

  if (isVisibleElement(elem)) {
    elementsMenuList.forEach((element) => {
      element.classList.remove('menu-window__link--active');
    });
    menuLink.classList.add('menu-window__link--active');
  }
}

export function changeLinkActiveForAbout() {
  const about = document.querySelector('.about');
  const skills = document.querySelector('.skills');
  const experience = document.querySelector('.experience .container');
  const aboutMenu = document.querySelector('.menu-window__link-about');
  const skillsMenu = document.querySelector('.menu-window__link-skills');
  const experienceMenu = document.querySelector(
    '.menu-window__link-experience'
  );

  changeActiveElem(about, aboutMenu);
  changeActiveElem(experience, experienceMenu);
  changeActiveElem(skills, skillsMenu);
}

export function changeLinkActiveForHome() {
  const home = document.querySelector('.header__content');
  const portfolio = document.querySelector('.portfolio');
  const homeMenu = document.querySelector('.menu-window__link-home');
  const portfolioMenu = document.querySelector('.menu-window__link-portfolio');
  const portfolioMenuTop = document.querySelector('.lng-progects');

  if (isVisibleElement(portfolio)) {
    portfolioMenuTop.classList.add('menu__link--active');
  } else {
    portfolioMenuTop.classList.remove('menu__link--active');
  }

  changeActiveElem(home, homeMenu);
  changeActiveElem(portfolio, portfolioMenu);
}
