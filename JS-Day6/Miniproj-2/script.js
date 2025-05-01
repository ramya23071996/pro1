var products=[
    {name:"sun_oil", qty:10},
    {name:"dhal",qty:15},
    {name:"egg",qty:20}
];
var inp_name = "inventory"
console.log(products);

function add_product(prod_name,prod_qty){
    products.push({name:prod_name,qty:prod_qty})
}
add_product("coc_oil",6);
console.log("After add Products");

console.log(products);
function removeProduct(productName) { 
    products = products.filter(item => item.name !== productName); 
    } 
     
if(inp_name==="inventory"){
    removeProduct("dhal");
}
 
    console.log("After Remove Product");
    
console.log(products);

