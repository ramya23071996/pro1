let count=0
document.getElementById("add").addEventListener("click",()=>{
    count++;
    document.getElementById("counter").innerText=count
})

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("counter").innerText=0
    count=0
})