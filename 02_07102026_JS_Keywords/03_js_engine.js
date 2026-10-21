let a =10;
console.log(a);

// hot/complex code example
for(let i=0; i<500000;i++){
    console.log(i);
    badcodefn();
}
function badcodefn(){
    console.log("This is a bad code function");
}