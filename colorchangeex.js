var btn = document.querySelector("button");
var isBlue = false;

// btn.addEventListener("click", function(){
//     if(isBlue){
//         document.body.style.background = "white";
//     } else {
//     document.body.style.background = "blue";
//     }
//     isBlue = !isBlue;
// });

btn.addEventListener("click", function(){
    document.body.classList.toggle("bg");
});