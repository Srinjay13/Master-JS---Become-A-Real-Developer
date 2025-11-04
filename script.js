// Chapter - 1 : The DOM  and DOM Manipulation

// DOM - Document Object Model paati bhasa mein wo saara cheezein hota hai jo humare HTML document ke andar hota hai. Jaise ki tags, attributes, text content etc.
// DOM Manipulation ka matlab hai ki hum JavaScript ke through apne HTML document ko dynamically change kar sakte hain. Jaise ki hum naye elements add kar sakte hain, existing elements ko modify kar sakte hain, ya phir unhe delete bhi kar sakte hain.

// Example of DOM Manipulation:

// 1. Selecting an element
const heading = document.getElementById("abcd");
//ye line humare HTML document mein se ek element ko select kar rahi hai jiska id 'abcd' hai.

//agar hamare element ke paas class hoti to hum ise is tarah select karte:
const heading2 = document.getElementsByClassName("className");

//agar hamare element ke paas koi specific tag hota to hum ise is tarah select karte:
const paragraphs = document.getElementsByTagName("p");

// agar hamare element ke paas koi specific selector hota to hum ise is tarah select karte:
const firstParagraph = document.querySelector("h1");
//isse always jo pehla match milega wahi select hoga

const allHeadings = document.querySelectorAll("h1");
//isse sare headings select ho jayenge aur ek NodeList return hoga(jo array jaisa hota hai)

// 2. Changing the text content of the selected element
//agar hamlog console.dir(heading) karte hain to hume wo pura element dikhai dega, and then usme se jo object aa rha hai usme se koi bhi value change kar sakte hain and wo html me reflect ho jayega.

heading.textContent = "Hello, World!";
//ye line humare selected heading element ka text content change kar rahi hai.Aur textContent boht fast hai compared to innerText, so try always using textContent

//ye cheez hamlog innerText se bhi kar sakte hain
heading.innerText = "Hello, Universe!";

//similarly hum innerHTML se bhi kar sakte hain
heading.innerHTML = '<span style="color:red;">Hello, Multiverse!</span>';

//But the difference between textContent, innerText and innerHTML is:
// textContent: Ye pura text content return karta hai, including hidden text. Ye HTML tags ko ignore karta hai.
// innerText: Ye visible text content return karta hai, jo user ko dikhai deta hai. Ye CSS styles ko consider karta hai.
// innerHTML: Ye element ke andar ka pura HTML content return karta hai, including HTML tags. Isse hum HTML structure bhi change kar sakte hain.

//Attributes ko bhi hum change kar sakte hain but attribute kya hota hai ye samajhna jaruri hai. Attribute wo hota hai jo HTML tags ke andar hota hai jaise ki id, class, src, href etc.

//for example agar hamare paas ek heading element hai jiska id 'myHeading' hai to hum uska class attribute is tarah change kar sakte hain:
let a = document.querySelector("a");
a.href = "https://www.google.com/"; //isse hum link ka url change kar rahe hain directly

heading.setAttribute("class", "newClassName");
//ye line heading element ka class attribute change kar rahi hai.

//getAttribute se hum attribute ki value le sakte hain
let classValue = heading.getAttribute("class");
console.log(classValue); //ye newClassName print karega

//removeAttribute se hum attribute ko remove kar sakte hain
heading.removeAttribute("class"); //ye heading element ka class attribute remove kar dega

// Now kuch agar hamlog ko naya HTML hi pura add karna hai then ham log pehle create karte hai element fir append/prepend karte hai jo bhi element chahiye uske andar

const newHeading = document.createElement("h1"); //ye ek naya h1 element create karega
newHeading.textContent = "This is a new heading";
document.body.append(newHeading); //ye naya heading element body ke end me add karega

//agar isi ki jagah pe prepend karte toh wo body ke starting me add ho jata
document.body.prepend(newHeading); //ye naya heading element body ke starting me add karega

// 3. Changing the style of the selected element
heading.style.color = "blue";
heading.style.fontSize = "24px";

// Ab for example hamare paas jo css style file hai usme ek class .hulu bolke kuch hai usme kuch pre defined css dala hua hai and if usko haame baas add karna hai kisi element par then we can do it directly like :

let head = document.querySelector("h1");
head.classList.add("hulu");
head.classList.remove("hulu"); //isse usi class remove hojaygea
head.classList.toggle("hulu"); //ye kya karta hai ki agar koi bhi class added hai toh wo hata deta hai and agar nahi hai toh usko add kar deta hai

//Recommeneded taarika yahi hota hai ki hamlog ko jo css chaiye via JS, usko kuch class mein pehle se define karke rakhte hai and then usko jab bhi lagega jis bhi area mein waha baas usko add kar do classList mein toh wo style laag jayega

// 4. Creating a new element
const newParagraph = document.createElement("p");
newParagraph.textContent =
  "This is a new paragraph added via DOM manipulation.";

// 5. Appending the new element to the body
document.body.appendChild(newParagraph);

// 7. Adding an event listener to an element
heading.addEventListener("click", function () {
  alert("Heading clicked!");
});

// In this example, we selected an element with the ID 'myHeading', changed its text content and style, created a new paragraph element and appended it to the body, removed an old element, and added a click event listener to the heading element.
// DOM manipulation is a powerful feature of JavaScript that allows developers to create dynamic and interactive web pages.
// Note: Make sure to have an HTML file with appropriate elements (like an element with id 'myHeading' and 'oldElement') to see the effects of this script.

// Chapter - 2 : Events and event handling

//Paati bhasa mein bole toh, event matlab hota hai koi bhi action ho(e.g. - Mouse click keyboard press)
//And event listener matlab hota hai apne koi uss action ke lie reaction dia using JS

//Adding Event Listener
let head1 = document.querySelector("h1"); //Selecting the heading first
head1.addEventListener("click", function () {
  head1.style.color = "red";
});
//isse kya hoga ki jo hamara heading hai usme jab bhi koi click karega toh wo red hojayega

//Removing event listener
//Jab hamlog remove karenge koi listener ko toh yaad rakhna ki jo function addEventListener mein pass karenge usi ko removeEventListener mein bhi pass on karna hoga
let p = document.querySelector("p");
function dblClick() {
  p.style.color = "yellow";
}
p.addEventListener("dblclick", dblClick);
p.removeEventListener("dblclick", dblClick);

//Input event listener
let inp = document.querySelector("input");
inp.addEventListener("input", function (random) {
  if (random.data !== null) {
    //ye cheez add kie hai kyuki backspace dene par null data ata hai toh usko nahi log karna hai islie ye if condition
    console.log(random.data);
  }
});

//Change event listener
let sel = document.querySelector("select");
let qs = document.querySelector("#question");

sel.addEventListener("change", function (srinjay) {
  qs.textContent = `${srinjay.target.value} Selected`;
});

// Approach always yaad rakhna ki koi bhi eventlistener add karna ho toh then usko function mein jo variable lenge usko console.dir(var) karke dekhenge ki usme jo value hamlog type kar rhe hai ya select kar rhe hai ya press kar rhe hai wo uss object jo console mein aya hai waha kis key value pair ke lie hai and hamlogo ko usse pata chhal jayega ki hame konsa key leke kam karna hai ya use karna hai
/*
let any = document.querySelector("h1");
window.addEventListener("keydown", function (details) {
  //Whenever we will press a key in the screen it will be shown in the screen using: "KEYDOWN" !
  if (details.key === " ") {
    any.textContent = "SPACE";
  } else {
    any.textContent = details.key;
  }
});
*/

//Now let's develop something aesthetically good, which might get you a feel of actual development irl
// Scenario : hamlog ke paas ek input file ka button rehega but wo dekhne mein acha nahi hota islie usko hide karke hamlog ek khud ka div banake khud ka btn banayenge and then jab bhi uss div pe click hoga hamlog input btn pe click karayenge and kuch agar file select hota hai toh uska naam show karenge and cancel hone par kuch nahi show hona chaiye ya error nahi ana chaiye
let fileinp = document.querySelector("#fileinp");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  fileinp.click();
});

fileinp.addEventListener("change", function (dets) {
  // console.log(dets.target.files[0].name);
  let name = dets.target.files[0];
  if (name) {
    // We need to check this bcz when we have selected a file and then we cancel it, it is returning undefined so to handle that we need to introduce this if block to handle that error
    btn.textContent = name.name;
  }
});

// Here we are trying to kindof create a form where we will have 4 fields to be submitted in a div in a form and once submitted we will create a profile card with the details provided by the user dynamically based on submission
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (dets) {
  dets.preventDefault(); //Ye use kar rhe hai taaki form submit hone par page refresh na hojaye and hamlogo ko sab values jo submit kia user ne wo saara mil pae

  let card = document.createElement("div");
  card.classList.add("card"); //ye humlog kar rhe to add the css that is already pre deined in the CSS part

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value); //src ko set kar rhe uss value form mein se jo 0th position pe hai that is the 1st entry 

  let h3=document.createElement("h3");
  h3.textContent = inputs[1].value;
  let h5=document.createElement("h5");
  h5.textContent= inputs[2].value;
  let p = document.createElement("p");
  p.textContent=inputs[3].value;

  profile.appendChild(img);
  //first appending the image in the profile and then adding all the other details of the profile and other ans to the card
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);
  // finally adding the card to the main div in the html

  main.appendChild(card);
  
  //To empty the answers submitted in the form after one submission, we need to clear each inputs apart from the submit button

  inputs.forEach(function(inp){
    if(inp.type !== "submit"){
      inp.value = "";
    }
  });
});

//Mouseover and Mouseout events
/*
let abcd=document.querySelector("#abcd");

abcd.addEventListener("mouseover",function(){
  abcd.style.backgroundColor="yellow";//isse jab bhi hamlog mouse us div ke upar leke jayenge tab wo yellow hojayega
});

abcd.addEventListener("mouseout",function(){
  abcd.style.backgroundColor="red";//isse jab bhi hamlog mouse us div se bahar leke jayenge tab wo red hojayega
});

//Mousemove event 
window.addEventListener("mousemove",function(dets){
  abcd.style.top = dets.clientX+"px";
  abcd.style.left = dets.clientY+"px";
  //Remember for this to work you need to make the div abcd css position as absolute

});

const box = document.getElementById("box");

box.addEventListener("keydown", () => {
    console.log("Key down!");
  });

box.addEventListener("keyup", () => {
    console.log("Key up!");
  });
*/
// Now when you type:
// When you press a key → “Key down!” logs and When you release the key → “Key up!” logs.

//When to use what - 
// Detect key combinations (Ctrl + S, Arrow keys, etc.) -> keydown
// Validate or get the final input value after typing -> keyup
// Trigger an action when key is released -> keyup
// Real-time reactions while key is held -> keydown

// 🎯 What is the Event Object in JavaScript?

// Whenever an event occurs (like a click, key press, etc.), the browser automatically passes an event object to your event handler.

// 👉 It contains all the details about the event, like : what triggered it, which element was involved, what type of event it was and much more

document.getElementById("btn").addEventListener("click", function(event) { // the event variable that we take as parameter which contains all the details about the event that took place 
    console.log(event);
  });

// 🧩 1️⃣ event.target meaning : The element that triggered the event.

// So for the above example div #abcd will be shown in the target of the event

// 💡 event.target is very useful when you have multiple elements sharing one event listener.

/*<div id="container">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
</div>

<script>
  document.getElementById("container").addEventListener("click", (event) => {
    console.log("You clicked:", event.target.textContent); // This will tell you which button you clicked !
  });
</script>
*/

// 🧩 2️⃣ event.type Meaning: The type of event that was triggered.
/*document.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
});
*/
// Event type: click or Event type: keydown
// Useful when you handle multiple event types in one handler

// 🧩 3️⃣ event.preventDefault() Meaning: Stops the browser’s default behavior for that event.
/*<a href="https://google.com" id="link">Go to Google</a>

<script>
  document.getElementById("link").addEventListener("click", (event) => {
    event.preventDefault(); // stops browser from navigating
    console.log("Navigation prevented!");
  });
</script>
*/

// 🌊 What Is Event Bubbling?

// Event bubbling means that when an event happens on an element,
// 👉 it first runs the event handler on that element,
// 👉 and then it "bubbles up" to its parent elements,
// 👉 all the way up to the top (document).

// Say for example we have a ul and many li's under it so if we want to give any event listener to all the li's, rather than giving to each li's individually again and again, it would be better to give it on the ul directly and use the effect of "Event Bubbling"

/*let ul = document.querySelector("ul");
ul.addEventListener("click",function(dets){
  dets.target.classList.toggle("lt");
  //Say for example whenever we click into a li we want it to get lined through then we have defined a .lt class and given the css for that class and whenever we click at first it will get striked through and then back to normal using toggle
});
*/
//Say for example we have a div named "a" then one div named "b" then one div named "c" inside which ffinally we have a button and now if we add an event listener of click in each div, then if we click on the button then we will get console.logged at first button clicked then c clicked then b clicked and then a clicked and this happens bcz of "Event Bubbling"

//This happens because if we get any event listener in a block then also it will check if its higher block has any event listener

// Jab bhi aap click karte ho ya koi bhi event raise karte ho toh apka jo ee=vent floe hai wo do phases mein chalta hai :
// Phase 1 : Event top level element se neeche ki taraf aayega
//Phase 2 : event raised element se parent ki taraf jayega
// And phase 1 always happens at first but it's just that wo by default on nhi rehta islie hamlog ko dikhayi nhi deta wo hote hue, warna event bubbling se opposite hi pehle hota hai, that is ki capture phase agar on hai toh wo hi pehla hota hai and then bubbling agar usme capture phase on nahi hai toh 

//🧭 What Is Event Capturing? When an event happens in the DOM (like a click), it goes through three phases:

// 1️⃣ Capturing phase → from the root (document) down to the target
// 2️⃣ Target phase → the event reaches the element that was actually interacted with
// 3️⃣ Bubbling phase → then it bubbles back up to the root

/*<div id="grandparent" style="padding: 20px; background: lightgray;">
  Grandparent
  <div id="parent" style="padding: 20px; background: lightblue;">
    Parent
    <button id="child">Click Me</button>
  </div>
</div>

<script>
  document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent CAPTURE");
  }, true); // 👈 true = capture phase

  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent CAPTURE");
  }, true);

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child TARGET");
  });

  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent BUBBLE");
  });

  document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent BUBBLE");
  });
</script>

OUTPUT : 
Grandparent CAPTURE
Parent CAPTURE
Child TARGET
Parent BUBBLE
Grandparent BUBBLE

🧠 What’s happening:

Event travels down from grandparent → parent → child (capture phase)

Hits the child (target phase)

Travels up from child → parent → grandparent (bubbling phase)
*/

//🎯 What Is Event Delegation? Instead of adding event listeners to many child elements, you add one event listener to their common parent, and handle the event based on which child triggered it — using event.target.

/* 
💡 Example 1 — Without Delegation (❌)
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<script>
  // ❌ Adds separate event listeners to each <li>
  document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
      console.log(item.textContent);
    });
  });
</script>
Works fine, but inefficient — adds 3 separate listeners.
If you later add 100 <li> elements dynamically, they won’t have listeners unless you reattach them.
✅ Example 2 — With Event Delegation
<ul id="fruit-list">
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>

<script>
  const list = document.getElementById("fruit-list");

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log("You clicked:", event.target.textContent);
    }
  });
</script>
🧠 What happens:

You click a <li> → event bubbles up to <ul>.

The <ul>’s single listener runs.

event.target points to the actual <li> that was clicked.

We check if (event.target.tagName === "LI") to make sure we only handle <li> clicks.

HOW TO HANDLE DYNAMIC ELEMENTS ?

<ul id="todo-list">
  <li>Learn JS</li>
</ul>
<button id="add">Add Item</button>

<script>
  const list = document.getElementById("todo-list");
  const addBtn = document.getElementById("add");

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      alert("Clicked on: " + event.target.textContent);
    }
  });

  addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New Task";
    list.appendChild(li); // 🧩 Added dynamically
  });
</script>

*/

