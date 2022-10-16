const input = document.getElementsByClassName('user-input');
const add = document.getElementsByClassName('add-new');
const list = document.getElementsByClassName('list-items');
const item = document.getElementsByClassName('item')


const newItem = (item)=>{
    const temp = `
    <li class="item" style="list-style-type: none;">
    <span>${item}</span>
    <button class="delete"> x </button>
    </li>`

    list.innerHTML += temp;
}


add.addEventListener("click", e =>{
    e.preventDefault()
    newItem.push(input);
});



/*
DOM the add button
DOM user input
DOM the whole list
DOM list item for template

Function to add user input to list 

event listener for add button
*/ 