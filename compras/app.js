// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);
//clear itens
clearBtn.addEventListener('click',clearItems);

//load list

window.addEventListener('DOMContentLoaded',setUpItems);



// ****** FUNCTIONS **********
function addItem(event){
    event.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString()

    if(value && editFlag === false){
        createListItem(id,value);
        //display
        displayAlert('Item adicionada!',"success");
        //container
        container.classList.add("show-container");
        //add local storage
        addLocalStorage(id,value);
        //set default
        setBackDefault();
        
    }
    else if(value && editFlag === true){
        editElement.innerHTML = value;
        displayAlert('Item alterado!','success');

        //edit local storage
        editLocalStorage(editID,value);

        setBackDefault();
    }
    else{
        displayAlert('Por favor, adicione um item!',"danger")
    }
}

//display alert
function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    },2000);

}

//clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item');
    
    if(items.length > 0){
        items.forEach(function(item){
            list.removeChild(item)
        });
    }
    container.classList.remove('show-container');
    displayAlert('Lista vazia','success');
    setBackDefault();
    localStorage.removeItem('list');
}

//edit function

//delete function
function deleteItem(event){
    const element = event.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    console.log(element)
    list.removeChild(element);
    if (list.children.length === 0){
        container.classList.remove('show-container');
    }
    displayAlert('Item removido!','success');
    setBackDefault();
    //remove from local storage
    removeLocalStorage(id);
}

function editItem(event){
    const element = event.currentTarget.parentElement.parentElement;
    
    editElement = event.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

//set default
function setBackDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";
}


// ****** LOCAL STORAGE **********
function addLocalStorage(id,value){
    const grocery = {id,value};
    let items = getLocalStorage();

    

    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items));

    
    
}

function removeLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter(function(item){
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem("list",JSON.stringify(items));
    console.log(items);
}

function editLocalStorage(id,value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;

        
    })

    localStorage.setItem("list",JSON.stringify(items));

}

function getLocalStorage(){
    return localStorage.getItem("list") ? 
    JSON.parse(localStorage.getItem("list")) 
    : [];
}

//set Item

//get Item

//remove Item
//localStorage.setItem('lista',JSON.stringify(['item2']));
// ****** SETUP ITEMS **********
function setUpItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id,item.value)
        });
    container.classList.add('show-container');
    }
}

function createListItem(id,value){
    const element = document.createElement('article');
    //add classe
    element.classList.add('grocery-item');
    //add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="tittle">${value}</p>
                        <div class="btn-container">
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        </div>`;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    //append child
    list.appendChild(element);
}