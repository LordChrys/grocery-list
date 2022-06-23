const list = document.getElementById('items');
const add = document.querySelector('.add-new');
const task = document.querySelector('.item');
const del = document.querySelector('.delete');

const newTask = task =>{
   const doc = `
        <li class="item" style="list-style-type: none;">
            <span>${task}</span>
            <button class="delete"> x </button>
        </li>
    `;
    
    list.innerHTML += doc;
};

add.addEventListener('click', e =>{
    e.preventDefault();
    newTask(document.querySelector(".user-input").value);
});


list.addEventListener('click', e =>{
    // e.preventDefault();
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

})
