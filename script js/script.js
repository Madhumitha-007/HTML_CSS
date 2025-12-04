console.log("HEllo");
var a=10;
console.log("a="+a);
var a=20;
console.log("a="+a);
let b=1;
console.log("b="+b);
b=2;

console.log(typeof a);

function greet()
{
    console.log("hellooooo");
}
greet();

function add(a,b)
{
    console.log(a+b);
}
add(5,7)

function sub(a,b)
{
    return a-b;
}
console.log(sub(4,1));

const addition=(a,b) =>
{
    return a+b;
}
console.log(addition(7,5));