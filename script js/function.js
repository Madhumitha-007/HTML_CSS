//function declaration
function  add(a,b){
    return a+b;
}
console.log(add(2,3));

//function expression
const  sub=function(a,b){
    return a-b;
}
console.log(sub(2,3));

//arrow function
const mul=(a,b)=>{
    return a*b;
}
console.log(mul(2,3));

const a=(a, b)=>a+b;
console.log(add(2, 3));