let student=["Madhu","Akshaya","Suwetha"];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);

//Using for loop to print the array
for(let i=0;i<student.length;i++)
{
    console.log(student[i]);
}

//length starts from 1
//example for push
let a=[1,2,3];
a.push(4);
console.log(a);

//example for pop
let b=[1,2,3];
b.pop(3);
console.log(b);

//example for shift
let c=[1,2,3];
c.shift(1);
console.log(c);

//example for unshift
let d=[1,2,3];  
d.unshift(0);
console.log(d);

//example for toString
let e=["apple","banana","orange"];
console.log(e.toString());

//example for at()
let f=["apple","banana","orange"];
console.log(f.at(2));

//example for join()
let g=["apple","banana","orange"];
console.log(g.join("*"));

//example for concat()
let h=["apple","banana","orange"];
let i=["mango","grapes","kiwi"];
let j=h.concat(i);
console.log(j);

//example for copywithin()
let k=["apple","banana","orange","mango","grapes","kiwi"];
k.copyWithin(3,0);  
console.log(k);

//example for splice()
let l=["apple","banana","orange","mango","grapes","kiwi"];
l.splice(2, 0, "lemon", "lime");
console.log(l);

//example for forEach()
let m=["apple","banana","orange","mango","grapes","kiwi"];
m.forEach(fruits=>{
    console.log(fruits);
})

//example for map()
let n=["apple","banana","orange","mango","grapes","kiwi"];
let o=n.map(fruits=>
    fruits.toUpperCase());
    console.log(o);

//example for filter()
let p=["apple","banana","orange","mango","grapes","kiwi"];
let q=p.filter(fruits=>
    fruits.length>5);
    console.log(q);

//example for find()
let r=["apple","banana","orange","mango","grapes","kiwi"];
let s=r.find(fruits=>
    fruits.length>5);
    console.log(s);