# Lesson 2 - Running a JS script in the command line

## Exercise 2.1

1. Create a new file called `lesson2.js`
2. Add this content into the file:

    ```javascript
    const readline = require('readline');
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    rl.question('What is your name? ', (answer) => {
      console.log('Your name is ' + answer + '!');
    
      rl.close();
    });
    ```
    
3. Save the file.
4. Open up your Terminal (or Command Prompt in Windows).
5. Change directory to the folder where you kept the file.
6. Type:

    ```bash
    node lesson2.js
    ```

7. See what happens.

**Further Reading**

- <https://nodejs.org/dist/latest-v10.x/docs/api/cli.html>

---

[Next: Lesson 3 - Intro to NPM ≫](lesson3.md)
