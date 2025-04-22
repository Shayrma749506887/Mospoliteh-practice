function showBio(element) {
    element.classList.toggle('active');
}


const themeToggle = document.createElement('div');
themeToggle.innerHTML = '🌓';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.cursor = 'pointer';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

const messages = [
    "Start system...",
    "System scan...",
    "Ready for CTF competitions!    "
];

function typeWriter(text, i, element) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(text, i, element), 100);
    }
}

function startTyping() {
    const element = document.getElementById("type-effect");
    let i = 0;
    
    function nextMessage() {
        if (i < messages.length) {
            element.innerHTML = "";
            typeWriter(messages[i], 0, element);
            i++;
            setTimeout(nextMessage, 2000);
        }
    }
    
    nextMessage();
}

window.onload = startTyping;

document.addEventListener('DOMContentLoaded', function() {
    // Работа табов на странице "О проекте"
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок и контента
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем активный класс к выбранной кнопке
            button.classList.add('active');
            
            // Показываем соответствующий контент
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Активируем первый таб по умолчанию
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
});