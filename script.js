function renderList(array) {
    const listContainer = document.getElementById('list-container');
    if (!listContainer) {
        console.error('Контейнер для списка не найден.');
        return;
    }

    const listItems = array.map(item => `<li>${item}</li>`).join('');
    const listHtml = `<ul>${listItems}</ul>`;
    listContainer.innerHTML = listHtml;
}

const exampleArray1 = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
const exampleArray2 = ['1', '2', '3', 'sea', 'user', 23];

renderList(exampleArray1);