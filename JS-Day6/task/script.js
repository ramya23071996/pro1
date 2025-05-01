//  Create an array of 5 student names
var stu=["Arun","Ramu","Somu","Guna","kiran","Aravindh"]
console.log(stu);

//  Add a new student name to the array using push()
stu.push("Karthick")
console.log(stu);

// Remove the last student using pop()
stu.pop()
console.log(stu);

//  Use map() to convert all names to uppercase. 
var upstr= stu.map(stu=>stu.toLocaleUpperCase());
console.log(upstr);

//  Use filter() to get students whose names start with "A". 
let filt_val=stu.filter(stu=>stu[0]==="A")
console.log(filt_val);

//  Use forEach() to print each student name.
stu.forEach(stu=>{
    console.log(stu)

    
})

// JS72. Create an object for a book with properties (title, author, price).
var book={title:"PS",author:"Kalki",price:"₹1070"}
console.log(book);

// JS73. Use Object.keys() to get all book properties.
console.log(Object.keys(book));
// JS74. Use Object.values() to get all book values. 
console.log(Object.values(book));

// JS75. Add a new property genre to the book object.

Object.assign(book,{year:1960})
console.log(book);

// JS76. Use delete to remove price from the book.
delete book.price
console.log(book);

// JS77. Merge a publisher object into the book object.

var pub_obj={author_country:"India",Original_name:"Krishnamurthy"}
var combine=Object.assign(book,pub_obj)
console.log(combine);

// JS78. Convert the book object into an array of key-value pairs using Object.entries(). 
console.log(Object.entries(book));










