
// 1. Print the price of each product using forEach
// 2. Print the product items as follows using forEach

//    ```sh
//    The price of banana is 3 euros.
//    The price of mango is 6 euros.
//    The price of potato is unknown.
//    The price of avocado is 8 euros.
//    The price of coffee is 10 euros.
//    The price of tea is unknown.
//    ```

// 3. Calculate the sum of all the prices using forEach
// 4. Create an array of prices using map and store it in a variable prices
// 5. Filter products with prices
// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
// 7. Calculate the sum of all the prices using reduce only
// 8. Find the first product which doesn't have a price value
// 9. Find the index of the first product which does not have price value
// 10. Check if some products do not have a price value
// 11. Check if all the products have price value
// 12. Explain the difference between forEach, map, filter and reduce
// 13. Explain the difference between filter, find and findIndex
// 14. Explain the difference between some and every


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 2 },
  ]
//  products.forEach(function(product) {   1
//       console.log(product.price);
//       console.log(product.product);

//   })
// 3. Calculate the sum of all the prices using forEach
var price = 0
products.forEach(function(product) {  
          price += +product.price
      })
    //   console.log(price);

// 4. Create an array of prices using map and store it in a variable prices
let prices = products.map(function(product) {
  return +product.price})
  // 5. Filter products with prices
let filter = prices.filter(function(product) {
    return product > 0})
    // console.log(filter);
       
// 6. Use method chaining to get the sum of the prices(map, filter, reduce)
let reduce = filter.reduce(function(sum, product) {return +sum + +product})
// console.log(reduce);
// 7. Calculate the sum of all the prices using reduce only
let onlyReduce = products.reduce(function(sum, product) {
    // console.log(sum);
    return sum + +product.price},0)
// console.log(onlyReduce);

// 8. Find the first product which doesn't have a price value
let firstProduct = products.find(product => !+product.price)
// console.log(firstProduct)

// 9. Find the index of the first product which does not have price value
let index = products.findIndex(product => !+product.price);
// console.log(index);

// 10. Check if some products do not have a price value
let some = products.some(product => !+product.price);
// console.log(some);

// 11. Check if all the products have price value
let evry = products.every(product => +product.price);
console.log(evry);