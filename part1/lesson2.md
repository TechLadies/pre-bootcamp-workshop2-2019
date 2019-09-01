# Lesson 2 - Data types in JS

> __Note:__ The following exercises will be done in the Chrome browser's JavaScript Console.
> 
> From the menu bar: `View` > `Developer`> `JavaScript Console`

---

## Exercise 2.1

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

6. When you are unsure:

	```javascript
	null
	```

---

## Exercise 2.2

**Scenario:** You may object to this

**Objective:**

- Learn about another commonly used data structure known as Objects
- Learn how to store things in an object

**Steps:**

1. Type the following into console:

	```javascript
	{}
	```

	> Object refers to a data structure containing data and instructions for working with the data. Objects sometimes refer to real-world things, for example a car or map object in a racing game. JavaScript, Java, C++, Python, and Ruby are examples of object-oriented programming languages.
	

2. Add some data into an object

	```javascript
	{
		name: 'Elisha Tan',
		email: 'elisha@example.com'
	}
	```

3. You can then refer to the thing inside:

	```javascript
	var user = {
		name: 'Elisha Tan',
		email: 'elisha@example.com'
	}
	```
	
	And then:
	
	```javascript
	user.name
	```

---

## Exercise 2.3

**Scenario:** An array of fun is also an object

**Objective:**

- Learn about another commonly used data structure known as Arrays

**Steps:**

1. Type the following into console:

	```javascript
	[0, 1, 2, 3, 5, 8, 13]
	```
	
	```javascript
	['Apple 🍎', 'Banana 🍌', 'Coconut 🥥', ]
	```

	> The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

2. 	You can also add things to an array

	```javascript
	[1, 2, 3, 4].push(5)
	```
---

[Next: Lesson 3 - How do you pass data around? ≫](lesson3.md)