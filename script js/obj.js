//example for object
let user={
    name:"Madhu",
    age:20,
    city:"Chennai"
};
console.log(Object.keys(user));
console.log(Object.values(user));

//update  key-value pair to the object
user.city="Coimbatore";
console.log(user);

//add new key-value pair to the object
user.gender="female";
console.log(user);

//delete key-value pair from the object
delete user.gender;
console.log(user);