// ##### Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
// 1. First remove all the punctuations and change the string to array and count the number of words in the array

//    ```js
//    let text =
//      'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//    console.log(words)
//    console.log(words.length)
//    ```

//    ```sh
//    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

//    13
//    ```

// 1. In the following shopping cart add, remove, edit items

//    ```js
//    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//    ```

//    - add 'Meat' in the beginning of your shopping cart if it has not been already added
//    - add Sugar at the end of you shopping cart if it has not been already added
//    - remove 'Honey' if you are allergic to honey
//    - modify Tea to 'Green Tea'

// 1. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// 1. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// 1. Concatenate the following two variables and store it in a fullStack variable.

//    ```js
//    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//    const backEnd = ['Node', 'Express', 'MongoDB']

//    console.log(fullStack)
//    ```

//    ```sh
//    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
//    ```


// 1. First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let spl_txt = text.split(' ')  
let i = spl_txt.length -1
while (i >= 0) {
    let j = spl_txt[i].length - 1;
   if (spl_txt[i][j] === ',' || spl_txt[i][j] === '.') {

       spl_txt[i] = spl_txt[i].split('');
       spl_txt[i].splice(-1)
       spl_txt[i] = spl_txt[i].join('');
   
   }
    i--
    
}

// console.log(spl_txt);

// 1. In the following shopping cart add, remove, edit items
//    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//    ```

//    1- add 'Meat' in the beginning of your shopping cart if it has not been already added
//    2- add Sugar at the end of you shopping cart if it has not been already added
//    3- remove 'Honey' if you are allergic to honey
//    4- modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat') // 1
// 2
if (shoppingCart[shoppingCart.length - 1] !== 'Sugar') 
    shoppingCart.push('Sugar') // 2
// 3
shoppingCart.splice(-2, 1)
// 4
shoppingCart[3] = 'Green Tea'
// console.log(shoppingCart);

// 1. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// 1. Concatenate the following two variables and store it in a fullStack variable.

//    ```js
//    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//    const backEnd = ['Node', 'Express', 'MongoDB']
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'  ]
const backEnd = ['Node', 'Express', 'MongoDB']
let ind = frontEnd.length - 1, m = 0;
    while (ind >= 0) 
    {
        if (frontEnd[ind] === 'Sass')
        {
            console.log('Sass is a CSS preprocess'); 
            m++;
        }
        ind--
    }
    if (m === 0)
    {
        frontEnd.push('Sass');
        console.log(frontEnd);
    }
    const fullStack = frontEnd.concat(backEnd);
    console.log(fullStack);


    // 

