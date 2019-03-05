//Events are everywhere
// - click on a button
// - hovering over a link
// - dragging & dropping
// - pressing the enter key

//Select an element & then add an event listener
//"Listen for a click on this <button>"
//"Listen for a hover event on the <h1>"
//"Listen for a keypress event on text input"

//addEventListener is to add a listener
element.addEventListener(type, functionToCall);

var button = document.querySelector("button");

button.addEventListener("click", function() {
    console.log("SOMEONE CLICKED THE BUTTON")
});

//Example

<button>Click Me</button>
<p>No one has clicked me yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//SETUP CLICK LISTENER
button.addEventListener("click", function(){
    paragraph.textContent = "Someone clicked the button!"
});

var h1 = document.querySelector("h1");
undefined
h1
<h1>​Welcome to MY DOM Demo​</h1>​
h1.addEventListener("click", function() {
    alert("h1 was clicked");
});
undefined
h1.addEventListener("click", function() {
    console.log("h1 was clicked");
});
undefined
VM256:2 h1 was clicked
h1.addEventListener("click", function() {
    console.log("h1 was clicked");
});
undefined
VM256:2 h1 was clicked
h1.addEventListener("click", function() {
    h1.style.background = "orange";
});
undefined
VM256:2 h1 was clicked
document.querySelector("ul").addEventListener("click", function(){
    console.log("YOU CLICKED THE UL");
});
undefined
3VM489:2 YOU CLICKED THE UL

//Too add an addEventListener to each li so they react individually
var lis = document.querySelectorAll("li");
undefined
lis
NodeList(3) [li, li, li]
//"this" correlates directly to the element listed before it, in this case "lis"
for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener("click", function(){
      this.style.color = "pink";
  });
}
undefined
3VM489:2 YOU CLICKED THE UL


//you do not always need to use an anonymous function
//Only preferred when needing to use again
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText() {
    paragraph.textContent = "Someone clicked the button";
}