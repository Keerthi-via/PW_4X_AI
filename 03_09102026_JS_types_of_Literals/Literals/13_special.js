//Special   numeric value

//infinity
let infinity = Infinity;
let negativeInfinity = -Infinity;   
console.log(infinity); // Output: Infinity
console.log("Negative Infinity:", negativeInfinity); // Output: -Infinity

// -Infinity
console.log("-Infinity:", -Infinity);

console.log("1/0",1/0); // Output: Infinity
console.log("-1/0",-1/0); // Output: -Infinity
console.log(typeof infinity); // Output: number

//NaN not a number
console.log("0/0",0/0); // Output: NaN
console.log("typeof NaN",typeof NaN); // Output: number
console.log("hello"/2); // Output: NaN
console.log("NaN:", NaN);                     // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)

console.log(0b1010+0o10+0XA); // Output: 28, binary 10 + octal 8 + hexadecimal 10 

console.log([1,,3,].length); //count of commas in array literal, Output: 3
console.log([1,2,3].length); //count of elements in array literal, Output: 3
