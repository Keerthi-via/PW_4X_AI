//Ternary operator is a conditional operator that takes three operands. It is used to evaluate a condition and return one of two values based on whether the condition is true or false.
let age =20;
let can_I_go =age> 18? "Yes": "No";
console.log(can_I_go);

let actualstatuscode=200;
let expectedstatuscode=200;
let testresult=actualstatuscode===expectedstatuscode? "Pass": "Fail";
console.log(testresult);

let environment="QA";
let baseurl=environment==="QA "? "https://qa.example.com": "https://prod.example.com";
console.log(baseurl);

//------------\
let isCI=true;
let browsemode=isCI?"headless": "headed";
console.log("Launching browser in :", browsemode , "mode");

let responseTine= 200;
let sla = 1000;
let slaStatus = responseTine <= sla ?  "Within SLA ✅" : "SLA breached ❌";  
let responseStatus=responseTine<300? "Success": "Failure";
console.log("Respstatus is :", responseStatus);         
console.log(`Response: ${responseTine}ms — ${slaStatus}`);                                                                                                                                                                   