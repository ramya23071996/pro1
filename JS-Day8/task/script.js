// Convert "javascript" to uppercase. 
let str1="javascript"
console.log(str1.toUpperCase());

//  Convert "HELLO WORLD" to lowercase.
let str2="HELLO WORLD"
console.log(str2.toLowerCase());

// Extract "Script" from "JavaScript" using slice(). 
let str3="JavaScript"
let result1=str3.slice(4,10)
console.log(result1);

//  Replace "bad" with "good" in "This is a bad day".
let str4="This is a bad day"
let result2=str4.replace("bad","good")
console.log(result2);

// Check if "Coding" is present in "I love Coding!".
let str5="I love coding"
let str6="coding"
console.log(str5);

if(str5.includes(str6)){
    console.log("The word 'coding' is present in the string.");
    
}
else {
    console.log("The word 'coding' is not present in the string.");
  }

//    Find the position of "world" in "Hello world!". 
var str7="Hello world"
console.log(str7.indexOf("world"));

// Remove spaces from " Trim me ".

let str8 = "   Hello, World!   ";
let str9 = str8.trim();
console.log("Original:", `"${str8}"`);
console.log("Trimmed:", `"${str9}"`);

// Count the number of characters in "Programming". 
let str10="Programming"
console.log(`Tot no Characters in "Programming": ${str10.length}`);

// Check if "apple" starts with "a". 
let str11="apple"
console.log(str11.startsWith("a"));

//  Split "banana,apple,orange" into an array. 
let str12="banana,apple,orange"
let str13=str12.split(",")
console.log(str13);

// Repeat "JS " three times.
let str14="JS"
console.log(str14.repeat(3));

// Concatenate "Web" and " Development". 
let str15="Web"
let str16="Development"
console.log(str15.concat(str16));

// Validate if "user123" has at least 5 characters. 
let str17="user123"
if(str17.length>=5){
    console.log("Validate");
    
}
else{
    console.log("Invalid");
    
}



