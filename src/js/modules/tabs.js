

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
const header = document.querySelector(headerSelector),
tab = document.querySelector(headerSelector),
content = document.querySelector(contentSelectorSelector);

function hideTabContent() {
    content.forEach(item => {
        item.style.display = 'none';
    });
    tab.forEach(item => {
        item.classList.remove(activeClass);
    });
}

function showTabContent(i) {
    content[i].style.display = 'block';
    tab[i].classList.add(activeClass);
}
}


export default tabs;