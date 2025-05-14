document.getElementById("but1").addEventListener("click", () => {
    var h1 = document.getElementById("h1_tag1")
    h1.textContent = "Welcome to Javascript"
})
var h2 = document.getElementById("h2_tag2")
h2.addEventListener("mousemove", () => {
    alert("This is Hover Title ")
})

document.getElementById("but2").addEventListener("click", () => {
    var inp = document.getElementById("name")
    inp.value = ""
})
document.getElementById("but3").addEventListener("click", () => {
    document.body.style.backgroundColor = "orange"
})

document.getElementById("but4").addEventListener("click", () => {
    var pas = document.getElementById("password")
    pas.type = pas.type === "password" ? "text" : "password";
})
document.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    document.getElementById("coordinates").innerText = `X: ${x}, Y: ${y}`;
});

document.getElementById("but5").addEventListener("click",(event)=>{
    event.preventDefault();
})
var count=0
document.getElementById("but6").addEventListener("click",()=>{
  count++;
  document.getElementById("counter").innerText=count;  
})
var bt1=document.getElementById("but7")
bt1.addEventListener("click",function(){
    bt1.style.display="none"
})
document.getElementById("but8").addEventListener("click",()=>{
    let par=document.getElementById("h1_tag3")
    par.style.display=par.style.display=== "none" ? "block" : "none"

})

document.getElementById("but9").addEventListener("click",()=>{
    document.getElementById("sound").play();
})

document.getElementById("but10").addEventListener("click",()=>{
    var img=document.getElementById("image1")
    img.src=img.src==="img1.jpg" ? "img1.jpg" : "img2.jpg";

})