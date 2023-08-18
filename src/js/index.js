// import changeLang from './modules/change-lang';
import showBody from './modules/show-body';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';
import { changeLinkActiveForHome } from './modules/change-link-active';

// changeLang('page-main');
setTimeout(showBody, 0);
changeColorSheme();
showHamburger();
changeLinkActiveForHome();

window.addEventListener('scroll', () => {
  changeLinkActiveForHome();
});

