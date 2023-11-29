var screen=document.querySelector(".exp")
var btns=document.querySelectorAll(".btn")
var btns1=document.querySelectorAll(".task")
screen.value=""
btns1.forEach(function(button){
button.addEventListener("click",function(){
screen.value=screen.value+button.getAttribute("data")
})
})
btns.forEach(function(button){
button.addEventListener("click",function(){
screen.value=screen.value+button.getAttribute("data")
})
})
function equal(){
var expr=screen.value
var result=eval(expr)
screen.value=result
}
function clearData(){
screen.value=""
}
