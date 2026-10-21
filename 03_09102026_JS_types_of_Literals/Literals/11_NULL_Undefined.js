//undefined 
let userName;
console.log(typeof userName);// userName is declared but not assigned a value,
// so it is of type undefined
console.log(userName);


/*null and undefined are both primitive values in JavaScript, but they represent different concepts.
null is an assignment value that represents the intentional absence of any object value.
undefined is a type that indicates that a variable has not been assigned a value yet.
*/

//function that does not return a value explicitly will return undefined by default
function greet() {
    //no return statement to return a value, so it returns undefined by default
}
console.log(greet()); // undefined

/*-----------------*-----------------*/
null==undefined; // true, because both represent the absence of a value
null===undefined; // false, because they are of different types (null is an object, undefined is a type)    

/*-----------------*-----------------*/
//Null
let profilepic = null; // null is a literal value that represents the intentional absence of any object value   
console.log(profilepic); // profilepic is a variable that holds the literal value null
console.log(typeof profilepic); // profilepic is of type object, which is a special case in JavaScript

