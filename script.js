const btnAdd = document.querySelector('.btn-add')

const toDoInput1 = document.querySelector('.todo-input')





let newToDo
let toDoInput
let errorInfo
let ulList
let btnComp


const adding = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    ulList = document.querySelector('.todolist ul')
    



    if(toDoInput.value !== '') {
        newToDo = document.createElement('li')
        newToDo.textContent = toDoInput.value
        ulList.append(newToDo)
        toDoInput.value = ''

        createTools()
        if(newToDo !== '') {
            errorInfo.textContent = ''
        }
    } else {
        errorInfo.textContent = 'Wpisz treść!'
    }

    

}

const createTools = () => {
    const div = document.createElement('div')
    newToDo.append(div)
    div.classList.add('tools')


    const buttonCompelte = document.createElement('button')
    buttonCompelte.classList.add('complete')
    buttonCompelte.innerHTML = '<i class="fas fa-check"></i>'
    div.append(buttonCompelte)
    buttonCompelte.addEventListener('click', taskComplete)

    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('edit') 
    buttonEdit.textContent = 'EDIT'   
    div.append(buttonEdit)

    const buttonDelete = document.createElement('button')
    buttonDelete.classList.add('delete') 
    buttonDelete.innerHTML = '<i class="fas fa-times"></i>'
    div.append(buttonDelete)
    buttonDelete.addEventListener('click', removeTask)
    
}



const removeTask = () => {
    newToDo.remove()
}

const taskComplete = () => {
    
    newToDo.classList.toggle('completed')
}



btnAdd.addEventListener('click', adding)
