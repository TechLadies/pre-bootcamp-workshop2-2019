# Lesson 3 - How do you pass data around? (variables)

## Exercise 3.1

**Scenario:** Let there be variables

**Objective:**

- Learn about how you can pass data around with variables
- Learn about mutable and immutable variables

**Steps:**

1. A variable is a container of data. In JavaScript, you can put any type of data into variables.

2. Variables are identified with a name

	- A variable name usually contain alphabets (a-z), numbers and underscore (_) characters
	- It cannot begin with a number

	Type:

	```
	var name
	```
	
	The act of creating a variable is to "declare" its existence.

3. Try this in the JavaScript console:

	```javascript
	var name = "Elisha Tan"
	```

	Type: `name` to show the value of the variable.
	
	The act of creating a variable with an initial value is to "initialize" it.

4. Let's overwrite the value

	```javascript
	name = "Janyn"
	```

	Type `name` and you will see the new value of the "name" variable.

5. You can declare variables with the `let` keyword:

	```javascript
	let name = "Elisha Tan"
	```
	
6. You can also freeze the value in a variable (where you don't allow anyone to change its value after initialization) by using the `const` keyword:

	```javascript
	const name = "Elisha Tan"
	```
	
	You won't be able to change its value:
	
	```javascript
	name = "Boo Boo"
	```

So here's a quick introduction to JavaScript variables.

---

[Next: Lesson 4 - Adding Artificial Intelligence ≫](lesson4.md)