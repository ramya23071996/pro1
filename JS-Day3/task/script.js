var positive=10
if(positive>0){
    console.log("This is a positive number",positive);
    
}

let age=2
if(age>=18){
    console.log("The Person is Adult",age);
    
}
else{
    console.log("The Person is not Adult",age);
    
}

var num=256
if(num % 2 ===0){
    console.log("This Number is Even",num);
    
}
else{
    console.log("This Number is Odd",num);
    
}

const mark=56

if(mark<=100 && mark>80){
console.log("Grade A",mark);

}
else if(mark<=80 && mark>60){
console.log("Grade B",mark);

}
else if(mark<=60 && mark>=50){
    console.log("Grade C",mark);
    
}
else if(mark<50 && mark>=35){
    console.log("Grade D",mark)
}
else{
    console.log("Fail");
    
}

var age1=28
if(age1>=18){
    console.log("Eligible for apply License",age1);
       
}
else{
    console.log("Not Eligible for apply License",age1);
    
}
var login=true
var inp="admin"
if(login===true){
    if(inp==="admin"){
        console.log("User Access Admin Log");
        
    }
    else{
        console.log("User Access Other Log");
        
    }
}
else{
    console.log("Invalid Access");
    
}

var day="Monday"

switch (day) { 
    case "Monday": 
    console.log("Start of the week!"); 
    break; 
    case "Satuarday": 
    console.log("Weekend is near!"); 
    break; 
    case "Sunday": 
    console.log("It's a holiday!"); 
    break; 
    default: 
    console.log("It's a normal day."); 
    } 

    var age3 = 65
    var dis=age3 >= 60 ? "Eligible for Discount" : "Not Eligible for Discount";
    console.log(dis,"The Person Age is",age3);

    var uname="admin"
    var pwd="12345"

    if(uname==="admin" && pwd==="12345"){
        console.log("Login Successfull");
        
    }
    else{
        console.log("Invalid Input");
        
    }

    var username="Mano"
    var mail="vts.gmail.com"
    var pwd="12345"

    if((username==="Mano" || mail==="vts.gmail.com") && pwd==="12345"){
        console.log("Successfully Entered");
    }
    else{
        console.log("Invalid");
        
    }
    
    var bol=true
    console.log(!true);

    var yr=2025

    if(yr % 4 === 0 && yr % 100!=0){
        console.log("This is Year is Leapyear",yr);
        
    }
    else{
        console.log("This year is not Leapyear",yr);
        
    }

    
    
    
    