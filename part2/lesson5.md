# Lesson 5 - Build a simple web app

## Exercise 5.1

**Scenario:** Host static files

**Objective:**

- Move your To Do list app from your app to this one.

**Steps:**

1. Copy your `lesson5.html` and `lesson5.js` file from [Part 1 - Lesson 5](../part1/lesson5.md) into the `public` folder of `myapp2`.

2. Restart the Express server
3. Visit <http://localhost:3000/lesson5.html>

You have now hosted your "To Do List" app in the Express app.

---

## Exercise 5.2

**Scenario:** Build a To Do List API

**Objective:**

- Build a simple API server for To Do List
- Learn to use Postman

**Steps:**

1. In the `myapp2` folder, go to the `routes` folder and add a new file: `todos.js`
2. Here's the content of `todos.js`

    ```javascript
    var express = require('express')
    var router = express.Router()
    
    const myToDo = []
    
    myToDo.push({ id: 0, name: 'Get oolong tea from NTUC', done: false, type: 'shopping' })
    myToDo.push({ id: 1, name: 'Buy more cat feed', done: false, type: 'shopping' })
    myToDo.push({ id: 2, name: 'Pet the cat before leaving the house today', done: true, type: 'pet' })
    myToDo.push({ id: 3, name: 'Attend TechLadies Pre-Bootcamp Workshop 2', done: true, type: 'event' })
    
    router.get('/', function(req, res, next) {
      res.json(myToDo)
    })
    
    router.post('/', function(req, res, next) {
      const { name, type } = req.body
    
      if (name.length == 0) {
        return res.json({error: 'No To Do provided'})
      }
    
      const newToDo = { id: myToDo.length, name: name, done: false, type: type }
      myToDo.push(newToDo)
      
      res.json({status: 'OK'})
    })
    
    router.put('/:id', function(req, res, next) {
      const putKeys = Object.keys(req.body)
    
      const pos = req.params.id
    
      if (putKeys.includes('name')) {
        myToDo[pos].name = req.body.name
      }
    
      if (putKeys.includes('done')) {
        myToDo[pos].done = req.body.done
      }
    
      if (putKeys.includes('type')) {
        myToDo[pos].type = req.body.type
      }
    
      res.json({status: 'OK'})
    })
    
    module.exports = router;
    ```
    
    Remember to save the file.

3. Open up `app.js` and add these 2 lines around line 25:

    ```javascript
    var todosRouter = require('./routes/todos')
    app.use('/todos', todosRouter)
    ```

4. Stop the server (press `Ctrl` + `c`) and restart it:

    ```bash
    npm start
    ```

5. Start [Postman App](https://www.getpostman.com/).
6. Click on "import". Click on "Choose file". Select `To Do List (localhost).postman_collection.json` and click on "Open"
7. A new Collection should appear. Try to use some of the API calls.
8. Try to add new To Dos and update them.

---