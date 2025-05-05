function ShoppingCart(){
  this.product=[];
  this.addproduct=function(prod){
    this.product.push(prod)
  }
  this.removeproduct=function(prodname){
    this.product=this.product.filter(function(prod){
      return prod.name !== prodname;
    })
  }
  this.totprice=function(){
    return this.product.reduce(function(tot,prod){
      return tot+prod.price
    },0)
  }
}

var cart = new ShoppingCart();
console.log("Add Products");

cart.addproduct({name:"Apple",price:100});
cart.addproduct({name:"Banana",price:90});
cart.addproduct({name:"Orange",price:120});
console.log(cart.product);
cart.removeproduct("Apple")
console.log("Remove Product");

console.log(cart.product);
console.log("Add Prices");
console.log(cart.totprice());





