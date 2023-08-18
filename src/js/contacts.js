// import changeLang from './modules/change-lang';
import showBody from './modules/show-body';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';

// changeLang('contacts');
setTimeout(showBody, 0);
changeColorSheme();
showHamburger();

const contactsMenuTop = document.querySelector('.lng-contacts');
contactsMenuTop.classList.add('menu__link--active');

const contactsMenu = document.querySelector('.menu-window__link-contacts');
contactsMenu.classList.add('menu-window__link--active');
