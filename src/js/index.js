// import changeLang from './modules/change-lang';
import showBody from './modules/show-body';
import changeColorSheme from './modules/change-color-sheme';
import showHamburger from './modules/hamburger';
import { changeLinkActiveForHome } from './modules/change-link-active';

const portfolioCardList = document.querySelectorAll('.portfolio__card');

// changeLang('page-main');
setTimeout(showBody, 0);
changeColorSheme();
showHamburger();
changeLinkActiveForHome();

window.addEventListener('scroll', () => {
  changeLinkActiveForHome();
});

portfolioCardList.forEach((card) => {
  card.addEventListener('click', () => {
    portfolioCardList.forEach((cardElem) => {
      if (card !== cardElem) {
        cardElem.classList.remove('portfolio__card--active');
      }
    });

    card.classList.toggle('portfolio__card--active');
  });
});
