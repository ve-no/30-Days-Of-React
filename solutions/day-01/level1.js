 

// ### 💻 Exercise

// ##### Exercise: Level 1

// ```js
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ]
// ```

// 1. Declare an _empty_ array;
// 2. Declare an array with more than 5 number of elements
// 3. Find the length of your array
// 4. Get the first item, the middle item and the last item of the array
// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// 7. Print the array using _console.log()_
// 8. Print the number of companies in the array
// 9. Print the first company, middle and last company
// 10. Print out each company
// 11. Change each company name to uppercase one by one and print them out
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
// 14. Filter out companies which have more than one 'o' without the filter method
// 15. Sort the array using _sort()_ method
// 16. Reverse the array using _reverse()_ method
// 17. Slice out the first 3 companies from the array
// 18. Slice out the last 3 companies from the array
// 19. Slice out the middle IT company or companies from the array
// 20. Remove the first IT company from the array
// 21. Remove the middle IT company or companies from the array
// 22. Remove the last IT company from the array
// 23. Remove all IT companies

// 1. Declare an _empty_ array;
const emptyArray = []; 

// 2. Declare an array with more than 5 number of elements
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3. Find the length of your array
// console.log(array.length);

// 4. Get the first item, the middle item and the last item of the array
// console.log(array[0], array[Math.trunc(array.length / 2)], array[array.length - 1]);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'data', 1.5, [1, 'data'], {name : 'allal', age : 26}, true, ()=>{return 5}];
// console.log(typeof(mixedDataTypes[6]));

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [];
itCompanies.push("faceboofk", "Google", "Microsoft", "Apple", "IBM", "oracle", "amazon")


// 7. Print the array using _console.log()_
// console.log(itCompanies)

// 8. Print the number of companies in the array
// console.log(itCompanies.length);

// 9. Print the first company, middle and last company
// console.log(itCompanies[0], itCompanies[Math.trunc(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

// 10. Print out each company
// itCompanies.forEach(function(company) {
  // console.log(company);});

// 11. Change each company name to uppercase one by one and print them out
// itCompanies.forEach(function(company) {
  // console.log(company.toUpperCase());});

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// itCompanies[itCompanies.length - 1] = "and Amazon are big IT companies"
// itCompanies.forEach(function (company, index) {
//  (itCompanies.length -1 === index || itCompanies.length -2 === index) ?
//  itCompanies[index] = company.concat(" ") : itCompanies[index] = company.concat(", ")
// });
// console.log(itCompanies.join(""));

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
// itCompanies.forEach(function(company) {
//   console.log(company ? company : "is _not found"); 
// })

// 14. Filter out companies which have more than one 'o' without the filter method
// let i = itCompanies.length - 1, companies = [], index = 0;
// while (i >= 0) {
//   let j, k;
//   j =  itCompanies[i].length - 1;
//   k = 0;
//   while (j >= 0)
//   {
//       if (itCompanies[i][j] === 'o')
//           k++;
//       j--;
//   }
//   if (k < 2)
//      companies[index]= itCompanies[i]
//  i--;
//  index++;
 
// }
// console.log(companies);

// 15. Sort the array using _sort()_ method
itCompanies.sort();
// console.log(itCompanies);

// 16. Reverse the array using _reverse()_ method
itCompanies.reverse();

// 17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3));

// 20. Remove the first IT company from the array
// itCompanies.shift()
// console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
let j = Math.trunc(itCompanies.length / 2)

// itCompanies.splice(j, 1)
// console.log(itCompanies);

// 22. Remove the last IT company from the array
// itCompanies.pop()
// console.log(itCompanies);

// 23. Remove all IT companies
itCompanies.splice(0);

console.log(itCompanies);
