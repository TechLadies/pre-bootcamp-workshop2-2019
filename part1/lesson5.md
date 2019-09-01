# Lesson 5 - How to not repeat yourself (functions, linking JS files)

## Exercise 5.1

**Scenario:** Trying to DRY all the things

**Objective:**

- Learn about how group commonly used JavaScript statements and commands into functions

**Steps:**

1. Create a new file: `lesson5.html`

2. Copy and paste this as its content:

	```html
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Lesson 5</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
        }
        .done {
          text-decoration: line-through;
        }
      </style>
    </head>
    <body>
      <h1>Interactive To-Do List</h1>

      <form id="todoForm">
        <p>
          <label for="todoTextField">New To Do:</label>
          <input type="text" id="todoTextField" size="40" />
        </p>
        <p>
          <label for="todoCategoryField">Category:</label>
          <select id="todoCategoryField">
            <option value="shopping">🛍 Shopping</option>
            <option value="event">🗓 Event</option>
            <option value="pet">🐱 Pet</option>
            <option value="others" selected>📝 Others</option>
          </select>
        </p>
        <p>
          <button>Add To Do</button>
        </p>
      </form>

      <h2>Items</h2>
      <ul id="myList"></ul>

      <script src="lesson5.js"></script>
    </body>
  </html>
	```
3. Create a new file called: `lesson5.js`

4. Copy and paste this as its content:

  ```javascript
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
  ```

---

[Next: Part 2 - Using JS in the Command Line ≫](../part2/README.md)
