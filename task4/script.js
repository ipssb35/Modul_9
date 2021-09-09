const aLink = document.querySelector('#link');
aLink.addEventListener('click', (event) => {
    event.preventDefault();
    let links = prompt('Начните вводить текст');
    aLink.textContent = links;
});
