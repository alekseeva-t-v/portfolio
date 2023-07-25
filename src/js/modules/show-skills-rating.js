/**
 * Определяет процентную составляющую навыков, отображает рейтинги с использованием анимации
 *
 */
function showSkillsRating() {
  const skillsRating = document.querySelector('.skills__rating');
  const counters = document.querySelectorAll('.skills__rating-counter');
  const lines = document.querySelectorAll('.skills__rating-line span');
  const pers = document.querySelectorAll('.skills__rating-per');

  counters.forEach((counter, index) => {
    lines[index].style['max-width'] = counter.textContent;
  });

  /**
   * Проверяет видим ли элемент.
   *
   * @param {object} element Элемент, чью видимость проверяем.
   * @return {boolean} возвращает true или false в зависимости от того видим элемент или нет.
   */
  function isVisibleElement(element) {
    const elementPosition = {
      top: window.pageYOffset + element.getBoundingClientRect().top,
      left: window.pageXOffset + element.getBoundingClientRect().left,
      right: window.pageXOffset + element.getBoundingClientRect().right,
      bottom: window.pageYOffset + element.getBoundingClientRect().bottom,
    };

    const windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };

    if (
      elementPosition.bottom > windowPosition.top &&
      elementPosition.top < windowPosition.bottom &&
      elementPosition.right > windowPosition.left &&
      elementPosition.left < windowPosition.right
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Присаивает и удаляет класс отвечающий за отображение анимации
   *
   * @param {boolean} isVisible true или false в зависимости от того видим элемент или нет.
   *
   */
  function changeAnimation(isVisible) {
    if (isVisible) {
      pers.forEach((per) => {
        per.classList.add('skills__rating-per--animation');
      });
    } else {
      pers.forEach((per) => {
        per.classList.remove('skills__rating-per--animation');
      });
    }
  }

  window.addEventListener('scroll', () => {
    changeAnimation(isVisibleElement(skillsRating));
  });

  changeAnimation(isVisibleElement(skillsRating));
}

export default showSkillsRating;


