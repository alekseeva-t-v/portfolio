// import changeLang from './modules/change-lang';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';
import { changeLinkActiveForHome } from './modules/change-link-active';

// changeLang('page-main');
changeColorSheme();
showHamburger();
changeLinkActiveForHome();

window.addEventListener('scroll', () => {
  changeLinkActiveForHome();
});

