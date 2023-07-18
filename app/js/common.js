
const list = document.querySelectorAll('.questions__item')

list.forEach(item => {
    item.addEventListener('click', function() {
        item.lastElementChild.classList.toggle('questions__item_show')
    })
})