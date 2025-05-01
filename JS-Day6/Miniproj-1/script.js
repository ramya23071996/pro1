a=["gbu","dragon","123"]
b1=prompt("Enter a movie name")
b2=b1.toLowerCase()

b=b2.split(",")
console.log(b1);

var result=b.every(arr=>a.includes(arr));

if(result==true){
    console.log("Ticket Booked");
    
}
else{
    console.log("Movie not available");
    
}