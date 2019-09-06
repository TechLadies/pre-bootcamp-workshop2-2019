# Lesson 4 - Intro to Express JS

You can serve HTML and JS files with ExpressJS. You can also build dynamic web sites with Express JS as well.

## Exercise 4.1

**Scenario:** Serve a basic NodeJS app

**Objective:**

- Create a web server using Express JS
- Server simple dynamic sites using NodeJS

**Steps:**

1. In your Terminal / Command Prompt, create a new folder called `myapp`

    ```bash
    mkdir myapp
    cd myapp
    ```

2. Create a new NPM package

    ```bash
    npm init
    ```
    
    Use the default for everything excpet the Entry Point. Change it to `app.js`.

3. Add Express JS package

    ```bash
    npm install express --save
    ```

4. Open the `myapp` folder in Visual Studio Code.
5. Create a new file called `app.js`

    Copy and paste the contents below into `app.js`.

    ```javascript
    const express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => {
      const name = req.query.name || 'World'
      res.send('Hello ' + name + '!')
    })
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    ```
    
    *Remember to save the file!*

6. Start the ExpressJS server

    ```bash
    node app.js
    ```
    
7. Open your browser and go to: <http://localhost:3000>

8. Try changing the name: <http://localhost:3000?name=Elisha>

**Further Reading**

- <https://expressjs.com/en/starter/installing.html>

---

## Exercise 4.2

**Scenario:** Here's an easier way to bootstrap an ExpressJS app

**Objective:**

- Create a web server using Express's Generator

**Steps:**

1. Using Terminal or Command Prompt, create a new folder: `myapp2`

    ```bash
    mkdir myapp2
    cd myapp2
    ```

2. Type this commands:

    ```bash
    npx express-generator
    npm install
    ```

3. You can start the app like this:

    ```bash
    DEBUG=myapp2:* npm start
    ```

4. Visit the site in your browser: <http://localhost:3000>

**Further Reading**

- <https://expressjs.com/en/starter/generator.html>

---

[Next: Lesson 5 - Build a simple web app ≫](lesson5.md)
