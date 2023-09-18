// add list
const addBtn = document.querySelector('#add-menu');
const newList = document.querySelector('#menu-input');

addBtn.addEventListener('click', () => {
    if (newList.value.length === 0) {
        alert('please enter list name')
    } else {
        document.querySelector('#menu-list').innerHTML += `
        <li class="item" draggable="true">
            <div class="p-2 border mb-3 d-flex rounded shadow-sm details">
                <i class="bi bi-grip-vertical"></i>
                <h6 class="ps-2">${newList.value}</h6>
                <button class="btn-close ms-auto"></button>
            </div>
        </li>
        `
    }
})