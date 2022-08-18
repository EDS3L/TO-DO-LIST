const btnAdd = document.querySelector('.btn-add')
const toDoInput1 = document.querySelector('.todo-input')



let toDoInput
let errorInfo
let ulList
let btnComp

let popUp
let btnCancle
let btnAccept
let popUpInfo
let popUpInput

let toDoEdit


const main = () => {
    allElements()
    events()
}

const allElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    ulList = document.querySelector('.todolist ul')


    popUp = document.querySelector('.popup')
    btnCancle = document.querySelector('.cancel')
    btnAccept = document.querySelector('.accept')
    popUpInfo = document.querySelector('.popup-body').firstChild
    popUpInput = document.querySelector('.popup-input')

}

const events = () => {
    btnAdd.addEventListener('click', adding)
    ulList.addEventListener('click', radar)
    btnCancle.addEventListener('click', closePopUp)
    btnAccept.addEventListener('click',accept)
    toDoInput.addEventListener("keypress", (e)=> {
        if (e.key === 'Enter') { 
            adding()
        }
    });
    popUpInput.addEventListener("keypress", (e)=> {
        if(e.key === 'Enter') {
            accept()
            toDoInput.focus()
        }
    })
    
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
    toDoInput.focus()
    

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
        EDIT(e)
        popUpInput.focus()
    } else if (e.target.matches('.delete')) {
        e.target.closest('li').remove()
        if(ulList.getElementsByTagName('li').length <= 0) {
            errorInfo.textContent = 'Brak zadań na liście.'
        }
        
    }
    
}

const EDIT = (e) => {
    toDoEdit = e.target.closest('li');
    popUpInput.value = toDoEdit.firstChild.textContent
    popUp.style.display = 'flex'
    popUpInfo.textContent = ''
}

const closePopUp = () => {
    popUp.style.display = 'none'
    
}

const accept = () => {
    if(popUpInput.value !== '') {
        toDoEdit.firstChild.textContent = popUpInput.value
        popUp.style.display = 'none'
        toDoInput.focus()
    } else {
        popUpInfo.textContent = 'wpisz tekst'
    }
}


document.addEventListener('DOMContentLoaded', main)