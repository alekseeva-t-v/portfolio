// import changeLang from './modules/change-lang';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';
import showSkillsRating from './modules/show-skills-rating';
import { changeLinkActiveForAbout } from './modules/change-link-active';

// changeLang('page-about');
changeColorSheme();
showHamburger();
showSkillsRating();
changeLinkActiveForAbout();

window.addEventListener('scroll', () => {
  changeLinkActiveForAbout();
});
