/* Literals are fixed values that are directly written into the code.
They can be of various types such as numbers, strings, booleans, etc. */
/*---------------*-----------------*/

//Number literals

let a=10; // 10 is a literal value of type number
console.log(a); // a is a variable that holds the literal value 10

/*--------------*-----------------*/
//String literals
let b="Hello, World!"; // "Hello, World!" is a literal value of type string
console.log(b); // b is a variable that holds the literal value "Hello, World!". 
// can also use single quotes for string literals

/*--------------*-----------------*/
//Boolean literals
let c=true; // true is a literal value of type boolean
console.log(c); // c is a variable that holds the literal value true

/*--------------*-----------------*/
//Array literals
let d=[1,2,3,4,5]; // [1,2,3,4,5] is a literal value of type array
console.log(d); // d is a variable that holds the literal value [1,2,3,4,5] 

/*--------------*-----------------*/
//Object literals
let e={name:"John", age:30}; // {name:"John", age:30} is a literal value of type object
console.log(e); // e is a variable that holds the literal value {name:"John", age:30}   

/*--------------*-----------------*/   
//Numerical Literals
let f=42; // 42 is a literal value of type number
console.log(f); // f is a variable that holds the literal value 42
let pi=3.14; // 3.14 is a literal value of type number
console.log(pi); // pi is a variable that holds the literal value 3.14
console.log(typeof f); // f is of type number
console.log(typeof pi); // pi is of type number

/*--------------*-----------------*/
//Null and Undefined Literals
let g=null;
console.log(g); // g is a variable that holds the literal value null
console.log(typeof g); // g is of type object, which is a special case in JavaScript

let h=undefined;
console.log(h); // h is a variable that holds the literal value undefined.
console.log(typeof h); // h is of type undefined

let userName;                                                               
console.log(typeof userName); // userName is declared but not assigned a value, 
// so it is of type undefined
console.log(userName); // userName is undefined since it has not been assigned a value yet  

let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF;
console.log(typeof h);
let color_hex = 0xFF0000;

let octal = 0o77; //base
let million = 1e6;
let tiny = 1.5e-4;