// import changeLang from './modules/change-lang';
import showBody from './modules/show-body';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';
import showSkillsRating from './modules/show-skills-rating';
import { changeLinkActiveForAbout } from './modules/change-link-active';

// changeLang('page-about');
setTimeout(showBody, 0);
changeColorSheme();
showHamburger();
showSkillsRating();
changeLinkActiveForAbout();

window.addEventListener('scroll', () => {
  changeLinkActiveForAbout();
});

