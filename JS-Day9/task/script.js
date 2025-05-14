
document.getElementById("but1").addEventListener("click",function changeback_color() {
      document.body.style.backgroundColor="green";
    }) 
  
document.getElementById("but2").addEventListener("click",function change_text(){
    var pa1=document.getElementById("para1")
    pa1.innerHTML="This is JavaScript"
})

var bt1=document.getElementById("but3")
but3.addEventListener("click",function(){
 var pa2=document.getElementById("para2")
 pa2.style.display=pa2.style.display==="none" ? "block" : "none"
})

document.getElementById("add").addEventListener("click",function addlist(){
    var ul=document.getElementById("list1")
var li=document.createElement('li')
    li.textContent='New list item';
    li.id = `item-${ul.children.length + 1}`;
ul.appendChild(li)
})

document.getElementById("remove").addEventListener("click",function removelist(){
let item=document.getElementById("item2")
item.remove()
})


bt4=document.getElementById("but4")
bt4.addEventListener("click",function(){
    var pa3=document.getElementById("para3")
    pa3.style.fontSize="30px"
})

var para4=document.querySelectorAll(".div1","p")
para4.forEach(para4=>{
    para4.style.color="brown";
    
})

img=document.getElementById("img1")
console.log(img);

img.addEventListener("mouseover",function(){
    img.style.border="5px solid black"
})

document.getElementById("but5").addEventListener("click",()=>{
    alert("The Button is Clicked")
})

var bt6=document.getElementById("but6")
bt6.addEventListener("click",()=>{
    let text=document.getElementById("text");
    text.classList.toggle("text1");
    text.classList.toggle("text2");

})

var head=document.createElement("h1");
head.innerText="This is a dynamically added heading"
document.body.prepend(head)

document.getElementById("but7").addEventListener("click",()=>{
    var div=document.getElementById("remove_ele")
    div.remove()
})

document.getElementById("but8").addEventListener("click",()=>{
    document.getElementById("input1").value="New Text";
})

