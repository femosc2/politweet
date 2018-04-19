# Politweets coding guidelines.

[TOC]


### General guidelines for all programming-languages.

* Indentation is always done with tabs, never blankspaces.
* Character coding on all official documents should be UTF-8.
* Filenames should only contain lowercase characters and multiple words are separated by underscores.
* Empty lines should never have blankspaces.
* Under no circumstances should there be any blankspaces at the end of a line.
* Comments in the code should always strive to explain the purpose of the code.



### JavaScript

#### General Rules

* An indentation is always one tab.
* The size of a tab is two blankspaces.
* All JavaScript files should have the .js file ending.
* When making comparisons **always** `===` - **never** `==`.

##### Variables

Always use `const` or `let`to declare variables. Use `const` as a standard when the variables are static. Use `let` when the variables are dynamic. `Var` should never be used.

#### Name

##### Variables

Variabler skrivs i camelcase. Börjar med liten bokstav och mer än ett ord separeras med stor bokstav.

Variables should be written in camelcase. Start the name with a lowercase letter and separate words with an uppercase letter.

```javascript
// Correct
const variable = "yes please";
const variableName ="yes please";

// Wrong
const variablename = "no thanks";
```



##### Functions

Functions should always be written in camelcase. Start with a lowercase letter and separate words with an uppercase letter.

```javascript
// Correct
function funky() {
	...
}

function funkyFunction() {
	...
}

// Wrong
function funkyfunction() {
	...
}
```

##### Anonymous functions

Anonymous functions are written with arrow functins, a.k.a fat arrows.

```javascript
// Correct
() => {
	...
}

// Wrong
function() {
	...
}
```

#### Formatting

##### General

* Strings should be declared with `""` and not `'`.


##### Variables

Variables are declared with a blankspace before and after the `=`.

```javascript
// Correct
const poli = "tweet";

// Wrong
const poli="tweet";
```



##### Functions

Code which runs in functions should always start indented on the row below the function declaration and ending curly-brace should be on a separate row.

```javascript
// Correct
function funkyFunction() {
	...
}

// Wrong
function funkyFunction() {...}
```



##### Operators

Blankspaces should be present before and after the operator.

```javascript
// Correct
x = 5 * 1;
```



##### Arrays

När man anger värden till en array skall det göras med ett komma och mellanslag efter.
When you declare values to an array it should always be done with a comma and a blankspace afterwards.

```javascript
// Correct
politicians = ["Bildt", "Putin", "EBThor"];
```



##### Objects

An objects attributes should be indented with a maximum of one attribute per row.

```javascript
// Wrong
const obj {
id: 1,name: "Malmö", isGreat: false}

// Correct
const obj {
	id: 2,
	name: "Helsingborg",
	isGreat: true
}
```



##### Kommentarer

* Use `/* … */` for multi-line comments.

```javascript
// Correct
/*
This is
how you write
comments on multiple
lines
*/

// Wrong
/** Dont write like this. **/

// Wrong
// this
// is not how you
// write comments
// on multiple lines.
```

* Use `//…` for single-line comments.

```javascript
// Correct
// Do I love hummus?
const iLoveHummus = true;

// Wrong
const iLoveHummus = true; // Do I love hummus?
```





### React


### CSS
* När vi använder fler än en selector ge varje selector en egen rad.
* Mellanslag innan öppnings {
* Använd mellanslag efter, och inte innan, :
* Closing } på ny rad
* Blankrad mellan varje deklaration

* When we use more than one selector every selector gets its own line.
* Blankspaces before the opening curly-brace.
* Use a blankspaces before the comma and never before the comma.
* Closing curly-brace on a new line.
* Blankspaces between every declaration.

#### Wrong
```CSS
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

#### Good
```CSS
.avatar {
  border-radius: 50%;
  border: 2px solid white;
}

.one,
.selector,
.per-line {
  // ...
}
```

* 0; instead of none;
