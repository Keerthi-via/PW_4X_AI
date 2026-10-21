// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)


//empty string is falsy value
let a="";

//  empty string vs 0 vs "0"
console.log("" == 0); // true coerced to number and compared
console.log("0"== 0); // true
console.log("" == "0"); // false . both are strings but values are different, compare only the values and not the data types

//always use strict comparision to avoid confusion
console.log("" === 0); // false. strict comparision. compares both the values and the data types
console.log("0"=== 0); // false. strict comparision. compares both the values and the data types
console.log("" === "0"); // false. strict comparision. compares both the values and the data types


