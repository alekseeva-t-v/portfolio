// ПОДКЛЮЧЕНИЕ ВИДЕО ФОНА ДЛЯ ХЭДЕРА
$(window).on('load', function () {
  // Video js - video background
  $('#header').vide('./files/video/cover', {
    bgColor: '#6f777b',
  });
});