What is JavaScript?

Javascript is a high-level, object-oriented, multi-paradigm programmig language.

high-level - We don't have to worry about complex stuff like memory management (E.g.: C,C++)

Object-Oriented - Based on objects for storing most kinds of data.

Multi-Paradigm - We can use different styles of programming
E.g.: Imperative, Declarative.

There are 7 primitive data types in JS:
Number- Number are generally Floting point numbers

Strings- Sequence of charecters

Boolean- Logical type(true/false)

Undefined- Value taken by a variable tha is not yet defined. (in simple word variable without any value)
e.g.: let children

Null- Also means empty value

Symbol(ES2015)- Value that is unique and cannot be changed

BigInt(ES2020)- Large integers than the Number type can hold

Javascript is a dynamic type, where variables automatically identified the type of the variable.

Did you know the difference between type coercion and type conversion in JavaScript ?

They both changes the data type of the value.

Coercion is implicit and only works when "+" operator used with strings.

Where as conversion can be implicit or explicit.

5 falsy values in js: 0,'',undefined,null, NaN

== (loose equality operator) checks the value but not the data type. Perform type coercion
===(strict equality operator) checks the value and the data type. No type coercion.

Javascript support backword compatibility that means you can run the code written 20 years ago and te compiler will still execute it.
JS is not forward compatible that is code written in future cant be run on ur current compiler.

So tht's why when a user is using chrome which is not not udate the JS will break(if using JS of latest version).
That is why JS is transpiled and polyfilled,i.e., the current Js code is converted back to E5 to ensure rowser compatibility for all users. Ans this mainly used in dvelopment environment , when we deploy the app. We use "BABEL" for that.

const keyword only works with the primitive value and we cannot mutate those values.
but arrays is not a primitive so its element can be changed

\*\* What is DOM (Document Object Model)

DOM is a structured representation of HTML Documnets. It allow Javascript to access HTML elements and styles to maipulate them

```
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
```

Here the call back function is registered by Js engine.
It is only called when the event( here click) happens.

How to select and remove class in html using JS:

1. Select the class using $querySelector (let's say selectedClass).
2. if you have a lot of elements with same classNam then chain this function (selectedClass.classList).
3. Then call add or remove the class added in that same html tag (selectedClass.classList.add('overlay')), without usig any period for that class inside add/ remove funcion.

Listening keyboard event:

```
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
```

keydown-when key is pressed
keyup- when you leve the pressed key
keypress-when you continuously pressed the key.

In order to get the deails of key pressed in keyboard we pass event parameter in callback function of addEventListener. The evet.key will tell the key pressed.
