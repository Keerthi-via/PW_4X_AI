
// Decimal (Base 10) - most common
let decimal = 42;
console.log("Decimal:", decimal); // 42

// Binary (Base 2) - prefix with 0b or 0B
let binaryLiteral = 0b101010;   
console.log("Binary:", binaryLiteral); // 42

// Octal (Base 8) - prefix with 0o or 0O
let octalLiteral = 0o52;        
console.log("Octal:", octalLiteral); // 42

// Hexadecimal (Base 16) - prefix with 0x or 0X
let hexLiteral = 0x2A;         
console.log("Hexadecimal:", hexLiteral); // 42

/*---------------*/


let million = 1000000;
let binary = 0b111111111111111111111111; // binary literal for 16777215
let octal = 0o37777777777; // octal literal for 4294967295
let hex = 0xFFFFFFFF; // hexadecimal literal for 4294967295

/*------------ BIGINT LITERALS------------*/
// --------------------------------------------------------
// 4. BIGINT - For arbitrarily large integers
// --------------------------------------------------------
let bigInt1 = 1234567890123456789012345678901234567890n;
let bigInt2= BigInt(1234567890123456789012345678901234567890); // using BigInt constructor
let bigFromNumber = BigInt(42); // using BigInt constructor

console.log("BigInt Literal:",bigInt1);
console.log("BigInt String:",bigInt2);
console.log("BigInt from Number:",bigFromNumber);
Console.log("Type of bigInt1:", typeof bigInt1);
