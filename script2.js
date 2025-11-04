//Chapter 3 : Forms and Form Validations
let form = document.querySelector("form");
let naam = document.querySelector("#name");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(naam.value.length<=2){
        document.querySelector("#hide").style.display = "initial";
        document.querySelector("#hide").style.color="red";
    }
    else{
        document.querySelector("#hide").style.display = "none";
    }
});

/*
🧾 What Is Inline JavaScript Validation?

Inline JavaScript validation means writing JavaScript directly inside the HTML element’s attributes (usually inside onsubmit, oninput, or onclick)
to check user input before submitting a form or taking action.

Basically — the JS code is “inline” inside the HTML tag, not in a separate <script> block or external file.

e.g - <input required minlength="3" maxlength="50" id="name" type="text" placeholder="name">
Here required minlength and maxlength are basic inline js which prevents the form to submit, gives a minimum length validation and max length

<form onsubmit="return validateForm()">
  <input type="text" id="username" placeholder="Enter username">
  <input type="submit" value="Submit">
</form>

<script>
  function validateForm() {
    const name = document.getElementById("username").value;
    if (name === "") {
      alert("Username cannot be empty!");
      return false; // ❌ prevent form submission
    }
    return true; // ✅ allow submission
  }
</script>

Here:
The onsubmit attribute calls the validateForm() function. Returning false stops the form submission. Returning true allows it.
✅ This is an example of inline JS validation because the event (onsubmit) is written inside the HTML tag.


🎯 What Is the pattern Attribute?

The pattern attribute is an HTML attribute (not JavaScript itself) that works with <input> elements.
It defines a regular expression (regex) pattern that the input’s value must match before the form can be submitted.

In other words:

It’s a built-in way to validate input using regex, without needing extra JavaScript code.

<form>
  <label for="username">Username:</label>
  <input type="text" id="username" pattern="[A-Za-z]{3,10}" required>
  <input type="submit">
</form>

✅ This allows:

Only letters (A–Z or a–z)

Between 3 and 10 characters

❌ Anything outside that — numbers, special characters, or wrong length — will prevent form submission and show a browser validation message.

<form>
  <label>Email:</label>
  <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
  <input type="submit">
</form>

<input type="tel" pattern="[0-9]{10}" placeholder="Enter 10-digit number" required>

<input type="password" 
       pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" 
       title="Must contain at least 8 characters, one letter and one number"
       required>
*/

// Chapter 4 : Timers and intervals

/*
🧩 1. What Are setTimeout() and setInterval()?

Both are built-in JavaScript timing functions that let you run code after some time delay — but they work differently.

Function	    What it does
setTimeout()	Runs a function once after a specified delay
setInterval()	Runs a function repeatedly at specified intervals

🕒 2. setTimeout() — Run Once After Delay
✅ Example:

setTimeout(() => {
  console.log("Hello after 3 seconds!");
}, 3000);

🧠 Explanation: Runs the function once after 3000 milliseconds (3 seconds). Then stops automatically !

🔁 3. setInterval() — Run Repeatedly
✅ Example:

setInterval(() => {
  console.log("Repeating every 2 seconds");
}, 2000);

🧠 Explanation: Runs the function every 2000 milliseconds (2s). Keeps repeating until stopped manually !

⏹️ 4. How to Stop Them

Both functions return an ID — you can use it to stop them later.

🧠 Example:
const timerId = setTimeout(() => console.log("Hi!"), 3000);
clearTimeout(timerId); // stops setTimeout before it runs

🧩 For setInterval:
const intervalId = setInterval(() => console.log("Tick"), 1000);
setTimeout(() => clearInterval(intervalId), 5000); // stops after 5s
*/

// Now let us make a countdown from 10 to 1

let count = 10;
let interval = setInterval(function(){
    if(count >0){
        console.log(count);
        count--;
    }
    else clearInterval(interval);
});

// Chapter 5 : LocalStorage,SessionStorage and Cookies

//LocalStorage -> apke browser ke andar data store karna jo ki browser baand hone par bhi delete nahi hoga (Browser ka database bol sakte hai)
//SessionStorage -> ye apka data temporarily store karta hai matlab ki tab baand hua aur data bhi gayeb hogya
//Cookies -> Ye bhi data store karta hai but apka data browser ki cookies naam ki property par set hoti hai and ye cookie concept kam ya light data ke lie hi hota hai

localStorage.setItem("name","Srinjay Saha"); // This will store the data in the Local Storage and localstorage hamlog always string hi store kar sakte hai, agar arrays ya object set karne ka try karenge to wo use either string ya "Object" bolke literally store kar dega

// To store any array or object, we use JSON
localStorage.setItem("friends",JSON.stringify(["mome","paul","anurag"]));
localStorage.getItem("friends"); //ye still ek string form mein hi data dikhayega
JSON.parse(localStorage.getItem("friends")); //This will return the array

let val = localStorage.getItem("name"); //val will have "Srinjay Saha" as the value stored
localStorage.removeItem("name"); // isse wo localstorage se haat jayega jo data stored tha
localStorage.clear(); //This will clear all the existing data in localStorage
// To update any value we will use the same setItem() which will update the value if the key is already present and if not then it will set it

// Session Storage also has the same three methods which we can use to set, update or remove items but it will be deleted once the tab is closed

// Cookies se hamlog sirf ~4kB data store kar sakte hai whereas SessionStorage and localStorage se hamlog ~5 MB data store kar sakte hai
// Cookies mein jo bhi data store karoge wo data page reload par automatically server side taak chala jayega

document.cookie= "age=23"; //This will set the cookie and this will not be deleted unless we delete it by our own
// We can see the cookies by adding a chrome browser named - "Edit this cookie"
