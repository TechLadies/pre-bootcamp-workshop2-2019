# Lesson 1 - How to print things on screen

There are few ways to use JavaScript in the browser:

- Write in the HTML file as a `<script>` tag.
- Write a separate JavaScript file and link it in your HTML page.
- Developer Console in Chrome.

In this lesson, we'll be writing JavaScript in the HTML file using the `<scrip>` tag.

---

## Exercise 1.1

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

## Exercise 1.2

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

## Exercise 1.3

**Scenario:** Let's do some clicking!

**Objective:**

- Write some HTML button that triggers a JavaScript code
- Learn about the HTML Document Object Model (DOM) and how to make changes it

**Steps:**

1. Let's go back to Visual Studio Code
2. In your **index.html** file, let's add this code in the `<body>` tag:

	```html
	<h1 id="headLine">This is a headline</h1>
	
	<button onclick="document.getElementById('headLine').style.color = 'red'">
		Click Me!
	</button>
	```
	
	*__Note:__ You can add this above the `<script>` tag.*

3. Save the file
4. Go back to the Chrome browser and reload the page
5. You should see a new button on screen. Try clicking it.

**Explanation**

You just used the `HTMLElement.click()` command to interact with visitors of your site. You have also managed to change the color of the text by changing its style programmatically by manipulating the DOM.

This is the way that we reference the `<h1 id="headline">...` tag

```javascript
document.getElementById('headLine')
```

And then we point to its `style` DOM object and change the `color` attribute to `'red'`. If you recall the last lesson, `'red'` is a valid "[CSS Named Color](https://www.quackit.com/css/color/values/css_named_colors.cfm)".

**Further reading**

- <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click>
- <https://developer.mozilla.org/en-US/docs/Glossary/DOM>

---

[Next: Lesson 2 - Data types in JS ≫](lesson2.md)
