const obj1 = {a:1, b:2};
const obj2 = {b: 4, c: 5};
const newObj = Object.assign(obj1,obj2);
console.log(newObj);
console.log(obj1,newObj);
