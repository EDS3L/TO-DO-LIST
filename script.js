const btnAdd = document.querySelector('.btn-add')

const toDoInput1 = document.querySelector('.todo-input')






let toDoInput
let errorInfo
let ulList
let btnComp

let popUp


const main = () => {
    allElements()
    events()
}

const allElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    ulList = document.querySelector('.todolist ul')
    popUp = document.querySelector('.popup')
}

const events = () => {
    btnAdd.addEventListener('click', adding)
    ulList.addEventListener('click', radar)
}


const adding = () => {


    if(toDoInput.value !== '') {
        const newToDo = document.createElement('li')
        newToDo.textContent = toDoInput.value
        ulList.append(newToDo)
        toDoInput.value = ''

        createTools(newToDo)
        if(newToDo !== '') {
            errorInfo.textContent = ''
        }
    } else {
        errorInfo.textContent = 'Wpisz treść!'
    }

    

}

const createTools = (newToDo) => {
    
    const div = document.createElement('div')
    newToDo.append(div)
    div.classList.add('tools')


    const buttonCompelte = document.createElement('button')
    buttonCompelte.classList.add('complete')
    buttonCompelte.innerHTML = '<i class="fas fa-check"></i>'
    div.append(buttonCompelte)
  

    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit') 
    buttonEdit.textContent = 'EDIT'   
    div.append(buttonEdit)

    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete') 
    buttonDelete.innerHTML = '<i class="fas fa-times"></i>'
    div.append(buttonDelete)
    
    
}


const radar = (e) => {
   
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    } else if (e.target.matches('.edit')) {
        EDIT()
    } else if (e.target.matches('.delete')) {
        e.target.closest('li').remove()
    }
    
}

const EDIT = () => {
    popUp.style.display = 'flex'
}


document.addEventListener('DOMContentLoaded', main)