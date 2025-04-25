// Print numbers from 1 to 10 using a for loop. 
for(i=1;i<=10;i++){
    console.log(i);
    
}
// Print even numbers from 2 to 20 using a for loop
var eve
for(eve=2;eve<=20;eve=eve+2){
    console.log(eve)
    
}
// Print numbers from 10 to 1 using a while loop. 
let wh=10

while(wh>0){
    console.log(wh);
    wh--;
   
}
// Print "Hello World!" 5 times using a do-while loop.

var hel=1

do{
   console.log('Hello World',hel);
   
    hel++;
}while(hel<6)

// Iterate over an array and print each element using a for...of loop.
var day=["Monday","Tuesday","Wednesday","Thirsday","Friday","Saturday","Sunday"]
var da
for(da=0;da<=day.length-1;da++){
    console.log(day[da])
}
    
//  Iterate over an object and print its properties using a for...in loop. 

var stu={name:"Mano",age:25,course:"JavaScript"}

for(let ke in stu){
    console.log(ke + ":",stu[ke]);
    
}
//  Sum numbers from 1 to 10 using a for loop.
var sum=0

for(let i=1;i<=10;i++){
    sum=sum+i;
      
}
console.log("The sum of Numbers From 1 to 10 is:",sum);

// Find the first number greater than 50 in an array using break.

let num=[10,14,16,19,20,35,46,49,50,56,70]
let chk

for(let num1=0; num1<num.length; num1++){
    if(num[num1]>50){
        chk=num[num1]
        break;
    }
}

console.log(chk);

// Skip printing numbers divisible by 3 using continue.

var num3=15
let div
for(div=1;div<=num3;div++){
    if(div%3===0){
       
        
        continue;
    }
    console.log(div);
}
//  Create a multiplication table for 5 using a for loop
var mul1=5
for(mul=1;mul<=10;mul++){
    console.log(mul,"x5:",mul1*mul);
    
}
//  Reverse a string using a loop. 
var str="Mannan"
for(let str1=str.length-1;str1>=0;str1--){
    console.log(str[str1]);
    
}
//  Count the number of vowels in a string using a loop. 
var count=0
var vowels=["a","e","i","o","u"]
let vow1
for(vow1=0;vow1<vowels.length;vow1++){
    count++
}
console.log(count);
// Find the largest number in an array using a loop. 

var arr=[12,23,45,67,54,78,32]
var lar
var largest=arr[0]
for(lar=1;lar<=arr.length;lar++){
    if(arr[lar]>largest){
        largest=arr[lar];
    }
}
console.log(largest)