// Находим все элементы с классом "animIt"
const animElements = document.querySelectorAll('.animIt');

// Функция для проверки видимости элемента
function checkVisibility() {
  animElements.forEach((anim) => {
    const rect = anim.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      anim.classList.add('visible'); // Элемент виден — добавляем класс
    } else {
      anim.classList.remove('visible'); // Элемент не виден — убираем класс
    }
  });
}

// Оптимизация через requestAnimationFrame
function optimizedCheck() {
  requestAnimationFrame(checkVisibility);
}

// Обрабатываем элементы при прокрутке страницы
window.addEventListener('scroll', optimizedCheck);
checkVisibility();