document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const clickImage = document.getElementById('clickImage');
    const counter = document.getElementById('counter');

    // Анимация при клике
    clickImage.addEventListener('click', () => {
        count++;
        counter.textContent = `Прима попущен ${count} раз`;
        
        // Эффект "вспышка"
        clickImage.style.filter = 'brightness(1.2)';
        setTimeout(() => {
            clickImage.style.filter = 'brightness(1)';
        }, 100);
    });

    // Инициализация Telegram Web App
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.enableClosingConfirmation();
});