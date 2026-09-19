/**
 * Переключает экраны приложения.
 * Скрывает текущий экран и с задержкой показывает следующий.
 * 
 * @param {number} currentScreenIndex - Номер текущего активного экрана.
 */
function goToNextScreen(currentScreenIndex) {
  const currentScreen = document.getElementById('s' + currentScreenIndex);
  const nextScreen = document.getElementById('s' + (currentScreenIndex + 1));

  if (currentScreen) {
    currentScreen.classList.remove('active');
  }

  // Небольшая задержка для плавности анимации смены экранов
  setTimeout(() => {
    if (nextScreen) {
      nextScreen.classList.add('active');
    }
  }, 130);
}

/**
 * Плавно убирает экран скримера (s5) с помощью анимации 
 * и переключает на финальный экран (s6).
 */
function removeScare() {
  const scareScreen = document.getElementById('s5');
  const finalScreen = document.getElementById('s6');

  if (!scareScreen) return;

  // Настройка плавного исчезновения и масштабирования
  scareScreen.style.transition = 'opacity 0.7s, transform 0.7s';
  scareScreen.style.opacity = '0';
  scareScreen.style.transform = 'scale(1.08)';

  // Ожидание завершения 700ms анимации перед сменяемостью классов
  setTimeout(() => {
    scareScreen.classList.remove('active');
    
    if (finalScreen) {
      finalScreen.classList.add('active');
    }
  }, 700);
}
