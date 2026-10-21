console.log(greeting);
var greeting = "Hello";
console.log(greeting);

// Output:
undefined
Hello   

console.log(apiUrl);
let apiUrl = "/login";

// Output:
ReferenceError: Cannot access 'apiUrl' before initialization

    if (true) {
    var retries = 3;
    let timeout = 5000;
    }
    console.log(retries);
    console.log(timeout);
    // Output:
    3, reference error: timeout is not defined

    const user = { name: "Asha", role: "tester" };
user.role = "lead";
console.log(user.role);

// Output:
lead

const baseUrl = "https://staging.example.test";
baseUrl = "https://prod.example.test";
console.log(baseUrl);

// Output:
TypeError: Assignment to constant variable.

let token;
console.log(token);
console.log(typeof token);

console.log(typeof null);

console.log(typeof 42, typeof "42", typeof true, typeof [1, 2]);

const env = "staging";
const id = 7;
console.log(`/api/${env}/users/${id + 1}`);

const name = "Ravi";
console.log('Hello ${name}');

console.log("200" == 200);
console.log("200" === 200);

console.log(null === undefined);
console.log(null == undefined);


const parsed = Number("abc");
console.log(parsed === NaN);

console.log(17 % 5);
console.log(2 ** 3);

let a = 34;
let result = a++;
console.log(result);
console.log(a);

console.log("5" + 3);
console.log("5" - 3);