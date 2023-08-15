// import changeLang from './modules/change-lang';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';

// changeLang('contacts');
changeColorSheme();
showHamburger();

const contactsMenuTop = document.querySelector('.lng-contacts');
contactsMenuTop.classList.add('menu__link--active');

const contactsMenu = document.querySelector('.menu-window__link-contacts');
contactsMenu.classList.add('menu-window__link--active');
