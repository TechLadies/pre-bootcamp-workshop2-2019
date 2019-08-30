# Part 1 - Using JS in the browser

## Lesson 1: How to print things on screen

There are few ways to use JavaScript in the browser:

- Write in the HTML file as a `<script>` tag.
- Write a separate JavaScript file and load it in your HTML page.
- Developer Console in Chrome.

---

### Exercise 1.1

**Scenario:** You want to welcome someone to your website

**Objective:**

- Get introduced to Visual Studio Code
- Write JavaScript code in your HTML file to greet someone

**Steps:**

1. Start Visual Studio Code
2. Create a new project:
	- In the menu bar, click on: `File` > `New Window`
	- Open the Explorer sidebar: `View` > `Explorer`
3. Click on "Open Folder"
4. Navigate to the desktop folder and click on "New Folder"
5. Create a new folder in your desktop. Let's call it **"my_javascript"**
6. Click on "Open"
7. Create a new file: `File` > `New file`
8. Copy and paste this into your editor

	```html
	<!doctype html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <title>Hello, world!</title>
	  </head>
	  <body>
	    <script>
	    	document.write('Hello, World')
	    </script>
	  </body>
	</html>
	```

9. Save the file and give it the file name: **index.html**
	- From the menu bar: `File` > `Save`
	- Or you can use the following keyboard shortcuts:
		- MacOS: Press `Cmd` + `s`
		- Windows: Press `Ctrl` + `s`

10. Look for the file in your desktop folder. It should be inside the **"my_javascript"** folder.
11. Double-click on the file and it should open in the web browser (otherwise, just drag and drop the file into Chrome browser)

You have just written your first **in-line JavaScript**. This is the JavaScript code you just wrote:

```javascript
document.write('Hello, World')
```

---

### Exercise 1.2

**Scenario:** Let's customize how we greet the person

**Objective:**

- Write some JavaScript code that will ask the user's name and write it into the HTML file

**Steps:**

1. Let's go back to Visual Studio Code
2. In your **index.html** file, let's change the JavaScript portion to this:

	```javascript
	const yourName = window.prompt('Can I have your name, please.', 'World')
	
	document.write('Hello, ' + yourName + '!')	
	```
	
	*__Note:__ You can delete the existing JavaScript code and just copy and paste the code above into the `<script>` tag.*

3. Save the file 
4. Go back to the Chrome browser and reload the page
5. You would be prompted for your name, click "OK". And your name should show up in the browser page.

	```
	Hello, Michael
	```
	
You just used the `Window.prompt()` command to interact with visitors of your site.

**Further reading**

- <https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt>

---

### Exercise 1.3

**Scenario:** Let's do some clicking!

**Objective:**

- Write some HTML button that triggers a JavaScript code

**Steps:**

1. Let's go back to Visual Studio Code
2. In your **index.html** file, let's add this code in the `<body>` tag:

	```html
	<button onclick="alert('Ouch!')">
		Click Me!
	</button>
	```
	
	*__Note:__ You can add this above the `<script>` tag.*

3. Save the file
4. Go back to the Chrome browser and reload the page
5. You should see a new button on screen. Try clicking it.
	
You just used the `HTMLElement.click()` command to interact with visitors of your site.

**Further reading**

- <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click>

---

## Lesson 2: Data types in JS

> __Note:__ The following exercises will be done in the Chrome browser's JavaScript Console.
> 
> From the menu bar: `View` > `Developer`> `JavaScript Console`

---

### Exercise 2.1

**Scenario:** You see data things

**Objective:**

- Learn about commonly used data types in JavaScript: boolean, integer, float (floating-point number, aka double) string. These are also known as *primitives*.

**Steps:**

1. Type the following thing into console:

	```javascript
	true
	```

	This is a boolean. There can be only 2 possible values: `true` or `false`

	```javascript
	false
	```

2. Here's an integer (whole number):

	```javascript
	9999
	```

3. You can see the type of data by typing:

	```javascript
	typeof 9999
	```

4. Here's a string:

	```javascript
	"Hello world"
	```

5. Here's a floating number:

	```javascript
	3.146
	```

---

### Exercise 2.2

**Scenario:** You may object to this

**Objective:**

- Learn about another commonly used data types in JavaScript: boolean, integer, float (floating-point number, aka double) string. These are also known as *primitives*.

**Steps:**

1. Type the following thing into console:

	```javascript
	true
	```

	This is a boolean. There can be only 2 possible values: `true` or `false`

	```javascript
	false
	```

2. Here's an integer (whole number):

	```javascript
	9999
	```

3. You can see the type of data by typing:

	```javascript
	typeof 9999
	```

4. Here's a string:

	```javascript
	"Hello world"
	```

5. Here's a floating number:

	```javascript
	3.146
	```

---


## Lesson 3: How do you pass data around? (variables, cookies, GET/POST)

## Lesson 4: Adding Artificial Intelligence (control structure, flow controls, if... else, switch)


## Lesson 5: How to not repeat yourself (functions, classes, import)
