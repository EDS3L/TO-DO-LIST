const btnAdd = document.querySelector('.btn-add')

const toDoInput = document.querySelector('.todo-input')
const ulList = document.querySelector('.todolist ul')

const errorInfo = document.querySelector('.error-info')

const li = document.createElement('li')
const buttonCompelte = document.createElement('button')
const buttonEdit = document.createElement('button')
const buttonDelete = document.createElement('button')
const div = document.createElement('div')




const adding = () => {
    
    const newValue = toDoInput.value
    if(newValue !== '') {
        
        ulList.appendChild(li)
        li.textContent = newValue
        toDoInput.value = ''
        li.appendChild(div)
        div.classList.add('tools')

        div.append(buttonCompelte, buttonEdit, buttonDelete)
        
        buttonCompelte.classList.add('complete')
        buttonCompelte.innerHTML = '<i class="fas fa-check"></i>'

        buttonEdit.classList.add('edit') 
        buttonEdit.textContent = 'EDIT'   

        buttonDelete.classList.add('delete') 
        buttonDelete.innerHTML = '<i class="fas fa-times"></i>'

        

        if(li !== '') {
            errorInfo.textContent = ''
        }
    } else {
        errorInfo.textContent = 'Wpisz treść!'
    }

    

}



btnAdd.addEventListener('click', adding)