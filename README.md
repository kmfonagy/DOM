# DOM demo

//DOM Manipulation

//Manipulating the style

//classList

//select
var tag = document.getElementById("highlight");

//MANIPULATE
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";

var p =document.querySelector("p");
undefined
//adds CSS style
p.classList.add("big")
undefined
//removes CSS style
p.classList.remove("big")
undefined
//toggles CCS style on/off
p.classList.toggle("big")
true
p.classList.toggle("big")
false
p.classList.toggle("big")
true
p.classList.toggle("big")
false
p.classList.toggle("big")
true

//textContent

//select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent;

//alter the textContnet, but doesn't render the HTML tags:
tag.textContent = "this content is replacing the text";

//innerHTML
var tag = document.querySelector("p");

tag.innerHTML;
//Will render any HTML tags added

var ap = document.getElementsByTagName("p");
undefined
ap
HTMLCollection [p]0: plength: 1__proto__: HTMLCollection
ap.textContent;
undefined
var ul = document.querySelector("ul");
undefined
ul.textContent;
"
		Orchids
		Succulents
		Tulips
	"
p.innerHTML
undefined
ap.innerHTML;
undefined
ul.innerHTML;
"
		<li>Orchids</li>
		<li>Succulents</li>
		<li>Tulips</li>
	"
document.querySelector("h1").textContent
"Welcome to MY DOM Demo"
document.querySelector("h1").textContent = "END OF LESSON";
"END OF LESSON"
document.body.innerHTML
// "
// 	<h1>END OF LESSON</h1>
// 	<p>Corgi mixes are <strong>super</strong> adorable</p>

// 	<ul>
// 		<li>Orchids</li>
// 		<li>Succulents</li>
// 		<li>Tulips</li>
// 	</ul>
// 	<img src="https://barrelhorseworld.com/dogs/images/1145556d.jpg">
// 	<img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/05/corgi-mix-cross-breeds-18-591c39272d49f__605.jpg">

//Manipulating attributes using getAttribute() & setAttribute()

<a href="www.google.com">I am a link</a>
<img src="logo.png"></img>

var link = document.querySelector("a");
link.getAttribute("href"); //"www.google.com"
//CHANGE HREF ATTRIBUTE
link.setAttribute("href", "www.dogs.com");
//<a href="www.dogs.com">I am a link</a>

//To change an IMG SRC
var img = document.querySelector("img");
img.setAttribute("src", "corgi.png");
//<img src="corgi.png"></img>

var img1 = document.getElementsByTagName("img")[0]
undefined
img1.getAttribute("src");
"https://barrelhorseworld.com/dogs/images/1145556d.jpg"
img1.setAttribute("src", "https://www.smartpettoysreview.com/wp-content/uploads/2018/04/dog-corgi-husky-mix.jpg");
undefined
img1.getAttribute("src");
"https://www.smartpettoysreview.com/wp-content/uploads/2018/04/dog-corgi-husky-mix.jpg"

********************************************************

//getElementByID
var tag = document.getElementById("highlight");
undefined
tag
<li id=​"highlight">​Listed item​</li>​
console.dir(tag)
VM158:1 li#highlightaccessKey: ""assignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: id, id: id, length: 1}autocapitalize: ""baseURI: "file:///D:/Admin/Documents/Class%20Site/DOM/domdemo1.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: ""]className: ""clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 671contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falsefirstChild: textfirstElementChild: nullhidden: falseid: "highlight"innerHTML: "Listed item"innerText: "Listed item"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "li"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: li.boldednextSibling: textnodeName: "LI"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 18offsetLeft: 48offsetParent: bodyoffsetTop: 138offsetWidth: 671onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullouterHTML: "<li id="highlight">Listed item</li>"outerText: "Listed item"ownerDocument: documentparentElement: ulparentNode: ulprefix: nullpreviousElementSibling: nullpreviousSibling: textscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 671shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}tabIndex: -1tagName: "LI"textContent: "Listed item"title: ""translate: truetype: ""value: 0__proto__: HTMLLIElement
undefined

//getElementsByClassName
var tags = document.getElementsByClassName("bolded");
undefined
tags
HTMLCollection(2) [li.bolded, li.bolded]0: li.bolded1: li.boldedlength: 2__proto__: HTMLCollection
console.dir(tags)
VM244:1 HTMLCollection(2)0: li.bolded1: li.boldedlength: 2__proto__: HTMLCollection
undefined
tags.length
2
tags.forEach()
VM378:1 Uncaught TypeError: tags.forEach is not a function
    at <anonymous>:1:6
(anonymous) @ VM378:1

//getElementsByTagName
var tags = document.getElementsByTagName("li");
undefined
tags
HTMLCollection(3) [li#highlight, li.bolded, li.bolded, highlight: li#highlight]

var tags = document.getElementsByTagName("h1");
undefined
tags
HTMLCollection(2) [h1, h1]
console.log(tags[0])
VM503:1 <h1>​My header​</h1>​
undefined

//querySelector
var tag = document.querySelector("#highlight");
undefined
tag
<li id=​"highlight">​Listed item​</li>​

var tag = document.querySelector("li a.special");
undefined
tag
null

//querySelectorAll
var lis = document.querySelectorAll("li");
undefined
lis
NodeList(3) [li#highlight, li.bolded, li.bolded]0: li#highlight1: li.bolded2: li.boldedlength: 3__proto__: NodeList

var bolded = document.querySelector(".bolded");
undefined
bolded
<li class=​"bolded">​Listed item​</li>​

var bolded = document.querySelectorAll(".bolded");
undefined
bolded
NodeList(2) [li.bolded, li.bolded]0: li.bolded1: li.boldedlength: 2__proto__: NodeList

var li = document.querySelectorAll("#highlight");
undefined
li
NodeList [li#highlight]

************************************************************

//mdn events reference https://developer.mozilla.org/en-US/docs/Web/Events

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");

    });
};