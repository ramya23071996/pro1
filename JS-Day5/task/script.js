//  Create a function that prints "Hello, World!".
function print(){
    console.log('"Hello,World!"');
    
}
print()
// Write a function that takes a number and returns its cube.
var a=3
var cu
function cube(num){
    cu=num**3
    return cu
}

cube(a)
console.log(cu)

//  Write a function to check if a number is even or odd. 

var chk=50
function oddeve(){
    if(chk % 2==0){
        console.log("Even Number",chk);
        
    }
    else{
        console.log("Odd Number",chk);
        
    }
}
oddeve()

//  Write a function to find the factorial of a number
var fact = 4
var ans=1
function factorial(){
    if(fact<0){
        ans=-1
        return ans
    }
    if(fact===0){
        ans=1
        return ans
    }
    for(let i=1;i<=fact;i++){
        ans=ans*i
    }
   return ans
}

factorial()
console.log(ans);

// Create a function to return the sum of two numbers. 

function sum(a,b){
return a+b
}
console.log(sum(4,5));

// Write a function that returns the largest of three numbers
function large(a,b,c){
if(a>=b && a>=c){
    return a;
}
else if(b>=a && b>=c){
    return b;
}
else{
    return c;
}
}
console.log(large(10,5,6))
console.log(large(9,11,5))

// Write a function that checks if a string is a palindrome. 
var str="radar"
function palindrome(str){
    let len=str.length;
    for(let i=0;i<len/2;i++){
        if(str[i] !== str[len-1-i]){
            return("Is Not Palindrome")
        }
    }
    return("Is Palindrome")
}
console.log(palindrome(str))

//  Create a function to convert Celsius to Fahrenheit. 

function celtofar(cel){
    return((cel*9/5)+32);
}
var cel=25;
far=celtofar(cel);
console.log(`${cel}°C is equal to ${far}°F`);

//  Write a function to calculate the simple interest.


    var prin = 10000;
    var rate=5;
    var time=3;
    function siminterest(prin,rate,time){
        let ratedeci=rate/100;
        let int=prin*ratedeci*time
        return int
}
var interest = siminterest(prin,rate,time)
console.log("The simple Interest is :",interest);

//  Create a function that reverses an array. 

var arr=["apple","orange","mango","banana"]
var arr1=[1,2,3,4,5]

function revarr(arr){
    let arrlen=arr.length
    for(let i=arrlen-1;i>=0;i--){
        console.log(arr[i]);
    }
}
revarr(arr)
revarr(arr1)

// Write a function that counts the number of vowels in a string.
var vow=["a","e","i","o","u"]
function countvowels(){
    let count=vow.length
    return count
}
console.log("The Count Of Vowels:",countvowels())

// Write an arrow function that doubles each number in an array. 

const doublenum= arr=>arr.map(num=>num*2)
const array=[1,2,3,4,5];
const double=doublenum(array);
console.log(double);

//  Create a function that takes a callback and calls it. 
function fun1(fun2){
    console.log("Hello");
    fun2()
    
}
function fun2(){
    console.log("How Are You");
    
}
fun1(fun2)