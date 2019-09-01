// Initializing the To Do List array
let myToDo = []

// Adding some to-do list items
myToDo.push({ name: 'Get oolong tea from NTUC', done: false, type: 'shopping' })
myToDo.push({ name: 'Buy more cat feed', done: false, type: 'shopping' })
myToDo.push({ name: 'Pet the cat before leaving the house today', done: true, type: 'pet' })
myToDo.push({ name: 'Attend TechLadies Pre-Bootcamp Workshop 2', done: true, type: 'event' })

function displayToDos() {
  const myListElement = document.getElementById('myList')

  while (myListElement.firstChild) {
    myListElement.removeChild(myListElement.firstChild);
  }

  for(let i=0; i < myToDo.length; i++) {
    const currentItem = myToDo[i]

    let emoji
    switch (currentItem.type) {
      case 'shopping':
        emoji = '🛍'
        break
      case 'event':
        emoji = '🗓'
        break
      case 'pet':
        emoji = '🐱'
        break
      default:
        emoji = '📝'
        break
    }

    const newListElement = document.createElement("li")
    if (currentItem.done) {
      newListElement.className = 'done'
    }

    newListElement.innerText = emoji + ' ' + currentItem.name

    myListElement.appendChild(newListElement)
  }
}

function resetForm() {
  document.getElementById('todoTextField').value = ''
  document.getElementById('todoCategoryField').value = 'others'
}

document.addEventListener("DOMContentLoaded", function(event) {
  displayToDos()

  const todoForm = document.getElementById("todoForm")
  todoForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let todoText = document.getElementById('todoTextField')
    let todoCategory = document.getElementById('todoCategoryField')

    if (todoText.value.length > 0) {
      let newToDo = { name: todoText.value, done: false, type: todoCategory.value }
      myToDo.push(newToDo)
    }

    displayToDos()
    resetForm()
  })
})
