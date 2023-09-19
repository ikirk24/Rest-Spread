// 1.
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

const filterOutOdds = (...args) => args.filter(num => num % 2 === 0)

// 2.
// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...args) => Math.min(...args)

// 3.
// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

// 4. 
const doubleAndReturnsArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

// 5. 
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = ele => {
let index = Math.floor(Math.random() * ele.length);
return [...ele.slice(0,index), ...ele.slice(index + 1)];
}
/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) =>
([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
let newObj = {...obj};
newObj[key] = val;
return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
let newObj = {...obj};
delete newObj[key]; 
return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => 
({...obj1, ...obj2}); 


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
let newObj = {...obj};
newObj[key] = val;
return newObj;
}