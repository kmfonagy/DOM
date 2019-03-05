var cl = document.getElementsByClassName("special");

console.log(cl[0])

var id = document.getElementById("first");

console.log(id)

var tag = document.getElementsByTagName("p");

console.log(tag[0])

var sel = document.querySelector("#first");

console.log(sel)

//resolution

var cl = document.getElementsByClassName("special");
undefined
console.log(cl[0])
VM30:1 <p id=​"first" class=​"special">​Hello​</p>​
undefined
var id = document.getElementById("first");
undefined
console.log(id)
VM42:1 <p id=​"first" class=​"special">​Hello​</p>​
undefined
var tag = document.getElementsByTagName("p");
undefined
console.log(tag[0])
VM52:1 <p id=​"first" class=​"special">​Hello​</p>​
undefined
var sel = document.querySelector("#first");
undefined
console.log(sel)
VM60:1 <p id=​"first" class=​"special">​Hello​</p>​
undefined

//alt resolution
document.getElementById("first");

document.querySelector("#first");

document.getElementsByClassName("special")[0]

document.querySelector(".special")[0]

document.getElementsByTagName("p")[0]

document.querySelector("h1 + p");