const consoleLog = document.querySelector('#consoleLog');
const alerT = document.querySelector('#alert');
const prompT = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('служит для вывода информации в консоль');

})

alerT.addEventListener('click', () => {
    alert('Служит для вывода сообщения в окне браузера');

})

prompT.addEventListener('click', () => {
    alert('Выводит в окне браузера окно с полем для ввода текста и кнопкой подтверждения ввода');

})