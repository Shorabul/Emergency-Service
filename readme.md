### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

### Answer:

1. The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
- getElementById
    - Selects a single element by id.

- getElementsByClassName
    - Selects all elements by class name.
    - returns a HTMLCollection.

- querySelector
    - Selects the first element that matches a CSS selector.

- querySelectorAll:
    - Selects all elements that match a CSS selector.
    - Returns a NodeList.

---

2. create and insert a new element into the DOM:
- HTML:
    - ```<divid="container"><h2>HelloWorld!<h2></div>```

- JS:
    - Create a new element:
        - ```const newPTag = document.createElement("p");```  

    - Add text content:
        - ```newPTag.textContent = "I am new P Tag";```  

    - Insert into the DOM:
        - ```const container = document.getElementById("container"); ``` 
        - ```container.appendChild(newPTag);``` 

---

3. Event bubbling is how events move up the DOM tree. When you click on an element, the event is first triggered on that element, then "bubbles" up to its parents. so on....

    - ```<div id="A"><div id="B"><button id="C">ClickMe<button></div></div>```

    - ```document.getElementById("C").addEventListener("click", function (){console.log("C clicked");});``` 

    - ```document.getElementById("B").addEventListener("click", function (){console.log("B div clicked");});```

    - ```document.getElementById("A").addEventListener("click", function (){console.log("A div clicked");});```

---

4. 1. Event delegation is a JavaScript technique that allows you to handle events on a parent element instead of individual child elements. 

    2. Event delegation is useful because it makes your JavaScript code more efficient, flexible, and easier to manage

---

5. The difference between **preventDefault() and stopPropagation()** methods:

| preventDefault()  | stopPropagation() |
| ------------- |:-------------:|
| Stops the browser’s default action for an event, | Stops event from bubbling to parent nodes |