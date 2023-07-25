/**
 * Отображает всплывающее меню по определенным условиям
 *
 */
function showHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-window');
  const close = document.querySelector('.menu-window__close');

  hamburger.addEventListener('click', () => {
    menu.classList.add('active');
  })

  close.addEventListener('click', () => {
    menu.classList.remove('active');
  })
}

export default showHamburger;
