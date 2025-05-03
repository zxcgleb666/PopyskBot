document.addEventListener('DOMContentLoaded', () => {
    let count = parseInt(localStorage.getItem('clickCount')) || 0;
  
    const clickImage = document.getElementById('clickImage');
    const counter = document.getElementById('counter');
    const praiseButton = document.getElementById('praiseButton');
    const fireworksContainer = document.getElementById('fireworks-container');
  
    // Обновляем счётчик при загрузке
    counter.textContent = `Прима попущен ${count} раз`;
  
    // Загрузка звука
    const popSound = new Audio('oan1.mp3');
  
    clickImage.addEventListener('click', () => {
      count++;
      counter.textContent = `Прима попущен ${count} раз`;
  
      // Сохраняем счётчик
      localStorage.setItem('clickCount', count);
  
      // Эффект вспышки
      clickImage.style.filter = 'brightness(1.3)';
      setTimeout(() => clickImage.style.filter = 'brightness(1)', 100);
  
      // Воспроизведение звука
      popSound.currentTime = 0;
      popSound.play();
    });
  
    praiseButton.addEventListener('click', () => {
      launchFireworks();
    });
  
    function launchFireworks() {
      for (let i = 0; i < 20; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        fireworksContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
      }
    }
  
    // Telegram Web App API
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.enableClosingConfirmation();
  });
  