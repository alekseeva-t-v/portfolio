/**
 * Отображает и скрывает всплывающее меню по определенным условиям
 *
 */
function showHamburger() {
  const body = document.querySelector('body');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-window');
  const menuBlock = document.querySelector('.menu-window__block');
  const menuWindowLinkList = document.querySelectorAll('.menu-window__link');
  const close = document.querySelector('.menu-window__close');

  /**
   * Открывает вплывающее меню, блокирует скролл
   *
   */
  function menuOpen() {
    menu.classList.add('active');
    body.classList.add('stop-scrolling');
  }

  /**
   * Закрывает вплывающее меню, разблокирует скролл
   *
   */
  function menuExit() {
    menu.classList.remove('active');
    body.classList.remove('stop-scrolling');
  }

  menuBlock.addEventListener('click', (event) => {
    event._isClickWithInMenu = true;
  });

  hamburger.addEventListener('click', (event) => {
    event._isClickWithInMenu = true;
  });

  body.addEventListener('click', (event) => {
    if (event._isClickWithInMenu) return;
    menuExit();
  });

  hamburger.addEventListener('click', () => {
    menuOpen();
  });

  close.addEventListener('click', () => {
    menuExit();
  });

  menuWindowLinkList.forEach((linkElem) => {
    linkElem.addEventListener('click', (event) => {
      event.preventDefault();
      const linkHref = linkElem.querySelector('a').href;

      menuExit();
      setTimeout(() => {
        window.location.href = linkHref
      }, 300);
    });
  });
}

export default showHamburger;
