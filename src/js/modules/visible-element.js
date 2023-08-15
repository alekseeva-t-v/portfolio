 /**
   * Проверяет видим ли элемент.
   *
   * @param {object} element Элемент, чью видимость проверяем.
   * @return {boolean} возвращает true или false в зависимости от того видим элемент или нет.
   */
 export function isVisibleElement(element) {
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