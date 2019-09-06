# Lesson 3 - Intro to NPM

Node Package Manager (NPM) is used to manage the 3rd party code libraries that your app uses. These are also called code dependencies.

## Exercise 3.1

**Scenario:** Create a new NPM Package

**Objective:**

- Start on a new app using NPM init

**Steps:**

1. Create a new NPM `package.json`:

    ```bash
    npm init
    ```
    
    Go through the instructions:
    
    ```bash
    ➜  lesson3 git:(master) ✗ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.
    
    See `npm help json` for definitive documentation on these fields
    and exactly what they do.
    
    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.
    
    Press ^C at any time to quit.
    package name: (lesson3) nyan-nyan
    version: (1.0.0)
    description: Just nyan
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC) MIT
    About to write to /Users/miccheng/workspace/part2/lesson3/package.json:
    
    {
      "name": "nyan-nyan",
      "version": "1.0.0",
      "description": "Just nyan",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "MIT"
    }
    
    
    Is this OK? (yes) y
    ```

2. Add a depdency

    ```bash
    npm install --save nyan
    ```

3. Write a new file `index.js`:

    ```javascript
    const nyan = require('nyan')()
    
    let opts = {
      colors: true,
      pure: false
    }
    
    nyan(opts)
    ```

4. Modify your `package.json`:

    ```javascript
    {
    ...
        "scripts": {
            "start": "node index.js"
          },
    ...
    }
    ```
    
    Add the "start" key to the "scripts" section.
    
5. ANd now you can run the code:

    ```bash
    npm start
    ```

6. Enjoy the [Nyan Cat](https://en.wikipedia.org/wiki/Nyan_Cat)

7. Press `Ctrl` + `c` to get out of the animated Nyan Cat screen.


---

[Next: Lesson 4 - Intro to Express JS ≫](lesson4.md)
